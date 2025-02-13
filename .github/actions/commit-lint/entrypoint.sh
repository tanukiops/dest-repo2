#!/bin/bash
pwd
echo "linting ${1@Q}"
echo "${1@Q}" | xargs echo | npx commitlint
