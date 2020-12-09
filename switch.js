const _ = require('lodash')
const cli = require('./ui/cli')
const password = require('./src/password')

/**
 * handle the argument coming in to use the correct lib
 */
const direct = (argument) => {
  argument = _.lowerCase(argument)

  // password
  if (argument === 'password') {
    cli.log(argument, password.random())
  }
}

exports.direct = direct
