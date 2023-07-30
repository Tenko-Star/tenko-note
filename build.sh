#!/bin/sh

git pull

NODE_OPTIONS_BAK=$NODE_OPTIONS

export NODE_OPTIONS="--max-old-space-size=8192"

npm run build

export NODE_OPTIONS=$NODE_OPTIONS_BAK
