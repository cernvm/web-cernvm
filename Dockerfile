FROM ubuntu:24.04

RUN apt-get update && apt-get install -y ruby-full build-essential zlib1g-dev

RUN gem install jekyll bundler

COPY . web-cernvm

WORKDIR web-cernvm

RUN bundle update && bundle install

CMD bundle exec jekyll serve
