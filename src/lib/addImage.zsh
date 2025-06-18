#!/bin/zsh

me=${0:A:h}
out="$me"/../../static/img

filename=${1##*/}
basename=${filename%.*}

for style in cyberslime dithernoir dithscii
do
    $style "$1" "$out/$style/lg/$basename.png"
    magick "$out/$style/lg/$basename.png" -resize 2048x2048 "$out/$style/lg/$basename.webp"
    magick "$out/$style/lg/$basename.png" -resize 512x512 "$out/$style/sm/$basename.webp"
    rm "$out/$style/lg/$basename.png"
done

magick $1 -resize 2048x2048 "$out/photo/lg/$basename.webp"
magick "$out/photo/lg/$basename.webp" \( ~/Pictures/initials_stamp.png -resize 256x256\> \) -geometry +64+64 -gravity southeast -composite "$out/photo/lg/$basename.webp"
magick $1 -resize 512x512 "$out/photo/sm/$basename.webp"
magick "$out/photo/sm/$basename.webp" \( ~/Pictures/initials_stamp.png -resize 64x64\> \) -geometry +12+12 -gravity southeast -composite "$out/photo/sm/$basename.webp"

isnotnew=$(jq --arg basename $basename '.|any(index( $basename ))' "$me"/photos.json)

if [[ $isnotnew == "false" ]]
then
    jq -S --arg basename $basename '. += [ $basename ]' "$me"/photos.json > "$me"/photos.tmp
    jq "sort" "$me"/photos.tmp > "$me"/photos.json
    rm "$me"/photos.tmp
fi
