#!/bin/bash ./node_modules/grunt-cli/bin/grunt build:production
./node_modules/bower/bin/bower install
./node_modules/bower/bin/bower install -g grunt-cli grunt
./bower_components/grunt-cli/bin/grunt