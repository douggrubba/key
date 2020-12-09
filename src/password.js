const _ = require('lodash')

const random = () => {
  const length = 24
  let pool =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_'
  pool = pool.split('')
  const poolLength = pool.length

  let str = ''
  for (let i = 0; i < length; i++) {
    str += pool[_.random(0, poolLength)]
  }

  return str
}

exports.random = random
