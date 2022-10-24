FROM jekyll/jekyll:pages
COPY Gemfile /srv/jekyll
COPY Gemfile.lock /srv/jekyll
RUN bundle install
