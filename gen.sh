#!/bin/bash

echo "GENERATING MODULE|CONTROLLER|SERVICE"

yarn nest g module $1 --no-spec
yarn nest g controller $1 --no-spec
yarn nest g service $1 --no-spec