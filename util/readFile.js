const fs = require('fs')

const all = (path) => {
  try {
    if (!fs.existsSync(path)) {
      const str = ``
      fs.writeFile(path, str, () => {})
      return str
    } else {
      return fs.readFileSync(path, 'utf8')
    }
  } catch (e) {
    console.log(e)
    return null
  }
}

exports.all = all
