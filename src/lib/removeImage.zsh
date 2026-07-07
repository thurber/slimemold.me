#!/bin/zsh

me=${0:A:h}
out="$me"/../../static/img

filename=${1##*/}
basename=${filename%.*}

for style in cyberslime dithernoir dithscii photo
do
    rm "$out/$style/lg/$basename.webp"
    rm "$out/$style/sm/$basename.webp"
done

jq -S --arg basename $basename 'del(.[] | select(. == $basename ))' "$me"/photos.json > "$me"/photos.tmp
jq "sort" "$me"/photos.tmp > "$me"/photos.json
rm "$me"/photos.tmp
