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
    $ key todo, make new todo item
    $ key todos, list the todos
`)

// handle the different arguments that are coming in
libSwitch.direct(_.head(cli.input))
