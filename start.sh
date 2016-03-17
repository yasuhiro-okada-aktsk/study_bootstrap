#!/bin/bash

set -eu

PWD=$(cd $(dirname $0); pwd)
cd $PWD

npm i
npm start
