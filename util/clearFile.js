const fs = require('fs')

const clearFile = (path) => {
  try {
    fs.unlinkSync(path)
  } catch (e) {
    console.error(e)
  }
}

exports.clearFile = clearFile
