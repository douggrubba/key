const fs = require('fs')

const upsert = (filename, content) => {
  try {
    if (!fs.existsSync(filename)) {
      fs.writeFileSync(filename, `${content}\n`)
    } else {
      fs.appendFileSync(filename, `${content}\n`)
    }
  } catch (e) {
    console.error(e)
  }
}

exports.upsert = upsert
