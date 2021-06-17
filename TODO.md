## (hypothetical) TODO:

# Fixes

- [ ] TESTS!!!! The whole thing works on faith at the moment.
- [ ] DetailsAPI response parsing logic is flaky. It takes a lot of data for granted (see next item for example)
- [ ] In rare cases if movie has trailer link, but no backdrop picture, play trailer button is not shown (i would mess up the layout at the moment).
- [ ] Api configuration (like genre name to id map) is hard coded. Make sure the fresh version is loaded at every App start up.
- [ ] Move response parsing logic from DetailsScreen to data layer to make the component cleaner.

# Features

- [ ] Implement data loading animations. Navigation ir quite jerky at the moment.
- [ ] Implement error logging and monitoring with [Bugsnag](https://www.bugsnag.com/) or similar.
- [ ] Implement Vimeo as a trailer video source. At the moment only trailer videos hosted on YouTube are shown.
- etc...
