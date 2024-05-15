#!/bin/zsh

brew install libyaml
rbenv install 3.2.4
rbenv global 3.2.4
rbenv rehash
gem install bundler
bundle install
