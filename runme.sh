#!/bin/sh
name=$(python name.py $@)

echo "probable name "$name
echo "serching on google....."
node index.js $name


