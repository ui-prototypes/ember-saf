# Ember-saf

# Requirements
* `sudo apt-get install git npm`

# Installation

### Global Installation
* `sudo npm install -g bower`

### Install Ember-SAF
* `git clone https://github.com/ui-prototypes/ember-saf.git`
* `cd ember-saf`
* `npm install ember-cli --save` // local repo ember-cli update
* `bower install`
* `ember init` // please enter No on every step, to skip overwrite settings
* `ember serve`

# REST Settings
* edit `app/adapters/application.js` and insert token to auth on WAF RestAPI

# Testing
* `npm install phantomjs`
* `ember test` // run headless via phantomjs web-stack

# Troubleshooting
* /usr/bin/env: node: No such file or directory
 * ln -s /usr/bin/nodejs /usr/bin/node

