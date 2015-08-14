call vulcanize --inline-css --inline-scripts --strip-comments index.html > index.min.html

call vulcanize --inline-css --inline-scripts --strip-comments --strip-exclude "components/polymer/polymer.html" --strip-exclude "components/iron-flex-layout/iron-flex-layout.html" src/my-view.html > src/my-view.min.html
PAUSE