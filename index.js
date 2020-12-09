#!/usr/bin/env node
'use strict'
const _ = require('lodash')
const meow = require('meow')
const libSwitch = require('./switch')

const cli = meow(`
  Usage
    $ key <input>
  Argument
    $ key password, Generate a random password
`)

libSwitch.direct(_.head(cli.input))
