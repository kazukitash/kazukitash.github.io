FROM --platform=amd64 jekyll/jekyll:pages
ENV TZ=Asia/Tokyo
COPY Gemfile /srv/jekyll
COPY Gemfile.lock /srv/jekyll
RUN bundle install
