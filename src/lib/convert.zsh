#!/bin/zsh

me="$(dirname "$0")"

for style in photo noir ascii
do
    convert "$me/../../static/photos/original/$style/$1.jpg" -resize 512x512 "$me/../../static/photos/$style/$1.webp"
done

convert "$me/../../static/photos/wrecked/$1.jpg" -resize 512x512 "$me/../../static/photos/wrecked/$1.webp"

rm "$me/../../static/photos/wrecked/$1.jpg"
