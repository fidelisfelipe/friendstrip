#!/bin/bash ./node_modules/grunt-cli/bin/grunt build:production
./node_modules/bower/bin/bower install
./node_modules/bower/bin/bower install grunt
./node_modules/bower/bin/bower install grunt-cli
./node_modules/grunt-cli/bin/grunt build:production