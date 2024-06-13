#!/bin/zsh

me="$(dirname "$0")"

for style in ascii ditherpunk graffiti wrecked
do
    julia --project="$me/AsciiImg" \
        "$me/AsciiImg/src/AsciiImg.jl" \
        $style \
        "$me/../../static/photos/original/photo/$1.jpg" \
        "$me/../../static/photos/original/$style/$1.jpg"
done

for style in photo ascii ditherpunk graffiti wrecked
do
    convert "$me/../../static/photos/original/$style/$1.jpg" -resize 512x512 "$me/../../static/photos/$style/$1.webp"
done

rm "$me/../../static/photos/original/wrecked/$1.jpg"
