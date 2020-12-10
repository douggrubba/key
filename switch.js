// 3rd parties
const _ = require('lodash')
const moment = require('moment')
const inquirer = require('inquirer')

// utilities
const cli = require('./ui/cli')

// libraries
const todo = require('./src/todo')
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

  // todo
  if (argument === 'todo') {
    inquirer
      .prompt({
        type: 'input',
        name: 'todoInput',
        message: 'What do you need to do today?'
      })
      .then((answer) => {
        todo.todoNew(answer.todoInput)
      })
  }

  // todos
  if (argument === 'todos') {
    const todos = todo.allAsChoices()

    inquirer
      .prompt([
        {
          type: 'checkbox',
          name: 'todos',
          message: `Todo List ${moment().format('MMM Do, YYYY')}\n\n`,
          choices: todos
        }
      ])
      .then((answers) => {
        todo.sync(todos, answers.todos)
      })
      .finally(() => {
        todo.allAsString()
      })
  }
}

exports.direct = direct
