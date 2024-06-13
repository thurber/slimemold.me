module AsciiImg

    using 
          ColorSchemes,
          ColorQuantization,
          Colors,
          ColorVectorSpace,
          DitherPunk,
          FileIO,
          FreeTypeAbstraction,
          ImageContrastAdjustment,
          ImageFiltering,
          ImageIO,
          ImageMagick,
          Images,
          ImageShow,
          IndirectArrays,
          LinearAlgebra,
          OffsetArrays,
          Plots,
          Statistics
    
    export asciify

    brightness(c::AbstractRGB) = 0.3 * c.r + 0.59 * c.g + 0.11 * c.b

    function edginess(img)
        # brightness
        b = brightness.(img)
        # sobel kernel grad
        Sy, Sx = Kernel.sobel()
        ∇y = imfilter(b, Sy)
        ∇x = imfilter(b, Sx)
        return sqrt.(∇x.^2 + ∇y.^2)
    end

    function paths_of_least_edginess(img)
        edgeness = edginess(img)
        # least edgy
        least_E = zeros(size(edgeness))
        least_E[end, :] .= edgeness[end, :]
        m, n = size(edgeness)
        for i in m-1:-1:1
            for j in 1:n
                j1, j2 = max(1, j-1), min(j+1, n)
                e, _ = findmin(least_E[i+1, j1:j2])
                least_E[i,j] += e
                least_E[i,j] += edgeness[i,j]
            end
        end
        # color least edgy
        pos_color = RGB(0.36, 0.82, 0.8)
        neg_color = RGB(0.99, 0.18, 0.13)
        to_rgb(x) = max(x, 0) * pos_color + max(-x, 0) * neg_color
        return RGBA.(to_rgb.(least_E) / maximum(abs.(least_E)))
    end

    function asciiimg(
        img;
        alphabet = " .`-_\':,;^=+/\"|)\\<>)iv%xclrs{*}I?!][1taeo7zjLunT#JCwfy325Fp6mqSghVd4EgXPGZbYkOA&8U\$@KHDBWNMR0Q",
        kernel_size = 34,
        ratio = 1.5,
        font = "IBM Plex Mono SemiBold"
    )
    
        # font face
        face = findfont(font)
    
        # alphabet to array
        alphabet = split(alphabet, "")
        # brightness scale same size as alphabet
        colorscale = Gray.(range(0, 1; length=size(alphabet)[1]))
    
        # skew image based on font aspect ratio
        m, n = size(img)
        h_m = Int(m÷(kernel_size*ratio))
        w_n = Int(n÷kernel_size)
    
        # resize regular image
        # TODO dither first?
        rgb = imresize(img, (h_m, w_n))
    
        # brightness raster
        bright = Gray.(brightness.(rgb))
    
        # brightness to ascii
        ascii(x) = alphabet[Int(floor(gray(x) * (size(alphabet)[1] - 1))) + 1]
        ascii_chars = ascii.(bright)
    
        # colorize and render ascii characters
        ascii_img = zeros(RGB, m, n)
        for y in 1:h_m
            for x in 1:w_n
                renderstring!(
                    ascii_img, string(ascii_chars[y,x]), face, 
                    Int(floor(kernel_size*ratio)),
                    Int(floor(y*kernel_size*ratio)), x*kernel_size,
                    fcolor=rgb[y,x],
                    gcolor=RGB(0,0,0),
                    valign=:vbottom, halign=:hright, 
                )
            end
        end
    
        return ascii_img
        
    end

    function dissociate(img, bg)
        m, n = size(img)
        # edginess
        edgeness = edginess(img)
        # sketch
        sketch = RGB.(ColorVectorSpace.complement.(RGB.(edgeness / maximum(abs.(edgeness)))))
        alphafly(x::AbstractRGB, fly::AbstractRGB) = alphacolor(fly, ((x.r > 0.9) && (x.g > 0.9) && (x.b > 0.9)) ? 0.0 : 1.0)
        ralphafly(x) = alphafly(x, RGB(1,0,0))
        galphafly(x) = alphafly(x, RGB(0,1,0))
        balphafly(x) = alphafly(x, RGB(0,0,1))
        goldenfly(x) = alphafly(x, RGB(0.831, 0.686, .216))
        blackfly(x) = alphafly(x, RGB(0,0,0))
        # etch
        burninate(x, y) = x.alpha == 0 ? y : x
        dis = bg
        dis = map(burninate, circshift(ralphafly.(sketch), (-m÷2+m÷7, -n÷2+n÷13)), dis)
        dis = map(burninate, circshift(galphafly.(sketch), (-m÷8, -n÷2+n÷3)), dis)
        dis = map(burninate, circshift(balphafly.(sketch), (m÷2-m÷12, n÷2-n÷5)), dis)
        dis = map(burninate, circshift(blackfly.(sketch), (-1+m÷10, -1+n÷10)), dis)
        dis = map(burninate, circshift(blackfly.(sketch), (-2+m÷10, -2+n÷10)), dis)
        dis = map(burninate, circshift(blackfly.(sketch), (1+m÷10, 1+n÷10)), dis)
        dis = map(burninate, circshift(blackfly.(sketch), (2+m÷10, 2+n÷10)), dis)
        dis = map(burninate, circshift(blackfly.(sketch), (m÷9, n÷10)), dis)
        dis = map(burninate, circshift(goldenfly.(sketch), (m÷10, n÷10)), dis)
        return dis
    end

    function stamp(img, bg)
        m, n = size(img)
        # edginess
        edgeness = edginess(img)
        # sketch
        sketch = RGB.(ColorVectorSpace.complement.(RGB.(edgeness / maximum(abs.(edgeness)))))
        alphafly(x::AbstractRGB, fly::AbstractRGB) = alphacolor(fly, ((x.r > 0.9) && (x.g > 0.9) && (x.b > 0.9)) ? 0.0 : 1.0)
        ralphafly(x) = alphafly(x, RGB(1,0,0))
        galphafly(x) = alphafly(x, RGB(0,1,0))
        balphafly(x) = alphafly(x, RGB(0,0,1))
        goldenfly(x) = alphafly(x, RGB(0.831, 0.686, .216))
        blackfly(x) = alphafly(x, RGB(0,0,0))
        whitefly(x) = alphafly(x, RGB(1,1,1))
        # etch
        burninate(x, y) = x.alpha == 0 ? y : x
        return map(burninate, blackfly.(sketch), bg)
    end

    function melt(
        imgs,
        weights,
        kernel_size=34,
        ratio=1.5
    )
        Z = imgs[1]
        m, n = size(imgs[1])
        h_m = Int(m÷(kernel_size*ratio))
        w_n = Int(n÷kernel_size)
        melted = zeros(RGB, m, n)
        for y in 0:(h_m-1)
            for x in 0:(w_n-1)
                r = rand(1:(sum(weights)))
                for i in 1:(size(imgs)[1])
                    if r <= (sum(weights[1:i]))
                        Z = imgs[i]
                        break
                    end
                end
                
                melted[
                    Int(floor(y*kernel_size*ratio))+1:Int(floor(y*kernel_size*ratio))+Int(floor(kernel_size*ratio)),
                    x*kernel_size+1:x*kernel_size+kernel_size,
                ] = Z[
                    Int(floor(y*kernel_size*ratio))+1:Int(floor(y*kernel_size*ratio))+Int(floor(kernel_size*ratio)),
                    x*kernel_size+1:x*kernel_size+kernel_size,
                ]
            end
        end
        return melted
    end

    function asciify(
        img,
        gif=false,
    )
        imgs = [
            asciiimg(img),
            asciiimg(dither(img, IM_checks()), font="Monofett"),
            asciiimg(dither(img, JarvisJudice()), font="Danfo"),
            img,
        ];
        weights = [7, 3, 3, 1];
        ascii_img = RGBA.(stamp(img, melt(imgs, weights)))
        if gif
            ascii_img = cat(
                ascii_img,
                RGBA.(stamp(img, melt(imgs, weights))),
                RGBA.(stamp(img, melt(imgs, weights)));
                dims=3
            )
        end
        return ascii_img
    end

    if abspath(PROGRAM_FILE) == @__FILE__
        method = ARGS[1]
        input_path = ARGS[2]
        output_path = ARGS[3]
        img = load(input_path)
        if method == "ascii"
            out_img = asciify(
                img,
                endswith(lowercase(output_path), "gif")
            )
        elseif method == "ditherpunk"
            out_img = imresize(
                (Gray.(dither(
                    Bool,
                    adjust_histogram(
                        adjust_histogram(
                            (Gray.(imresize(
                                img;
                                ratio=1/8
                            ))),
                            GammaCorrection(gamma=0.8)
                        ),
                        ContrastStretching(t = 0.5, slope = 1)
                    ),
                    Bayer(),
                    to_linear=true
                )));
                ratio=8
            )
        elseif method == "graffiti"
            out_img = RGB.(dissociate(
                img,
                RGB.(Gray.(paths_of_least_edginess(img)))
            ))
        elseif method == "wrecked"
            out_img = dissociate(
                imresize(RGB.(
                    dither(
                        convert.(
                            HSV,
                            imresize(img; ratio=1/8)
                        ),
                        Bayer(),
                        ColorSchemes.Moth;
                    )
                ); ratio=8),
                imresize(asciify(imresize(img; ratio=1/8)); ratio=8)
            )
        end

        save(output_path, out_img; fps=5)

    end

end
