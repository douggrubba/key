const _ = require('lodash')
const moment = require('moment')
const inquirer = require('inquirer')
const newFile = require('../util/newFile')
const readFile = require('../util/readFile')
const { clearFile } = require('../util/clearFile')

const path = `./todos/${moment().format('YYYY-MM-DD')}.md`

/**
 * Add a new todo to the list
 * @param {String} content
 */
const todoNew = (content) => {
  newFile.upsert(path, `- [ ] ${content}`)
}

/**
 * Read the todo list and output as a string
 */
const allAsString = () => {
  return readFile.all(path)
}

/**
 * Get all the choices from the todo list for the day
 */
const allAsChoices = () => {
  let todosRaw = []
  let todosPrepped = []

  try {
    todosRaw = readFile.all(path)
    const lines = todosRaw.split('\n')

    _.each(lines, (line) => {
      if (line !== '') {
        const parts = line.split('] ')
        todosPrepped.push({
          name: parts[1],
          checked: parts[0] === '- [x' ? true : false
        })
      }
    })
  } catch (e) {
    console.error(e)
  }

  let choices = []
  choices.push(separator())

  _.each(todosPrepped, (todo) => {
    choices.push({
      name: todo.name,
      checked: todo.checked
    })
  })

  choices.push(separator())

  return choices
}

/**
 * Sync the selected items from the ui
 * to that of in the file so they match
 * after the user has reviewd them for the day
 * @param [] allTodos "unchanged"
 * @param [] selected "those selected post change"
 */
const sync = (allTodos, selected) => {
  if (allTodos.length < 2) {
    return false
  }

  clearFile(path)

  // remove the first and the last item
  // as they are just ui seperators and can go
  allTodos.splice(0, 1)
  allTodos.splice(allTodos.length - 1, 1)

  _.each(allTodos, (todo) => {
    todo.checked = _.includes(selected, todo.name)
    let str = todo.checked ? `- [x] ${todo.name}` : `- [ ] ${todo.name}`
    newFile.upsert(path, str)
  })
}

/**
 * "UI" separator for the list
 */
const separator = () => {
  return new inquirer.Separator(
    '=============================================================='
  )
}

exports.sync = sync
exports.todoNew = todoNew
exports.allAsString = allAsString
exports.allAsChoices = allAsChoices
