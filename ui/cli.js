const cl = console.log
const chalk = require('chalk')
const colors = require('./colors')

const log = (argument, content) => {
  cl(
    `


    <${chalk.hex(colors.blue['800'])(argument)}> ${chalk.hex(
      colors.blue['500']
    )(content)}


    `
  )
}

exports.log = log
