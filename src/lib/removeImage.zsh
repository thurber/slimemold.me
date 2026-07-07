#!/bin/zsh

me=${0:A:h}
out="$me"/../../static/img

filename=${1##*/}
basename=${filename%.*}

for style in cyberslime dithernoir dithscii
do
    rm "$out/$style/lg/$basename.webp"
    rm "$out/$style/sm/$basename.webp"
done

jq -S --arg basename $basename 'del(.[] | select(. == $basename ))' "$me"/photos.json
