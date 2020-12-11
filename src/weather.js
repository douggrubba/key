const _ = require('lodash')
const axios = require('axios')

const url = `http://${process.env.WEATHER_API_URL}?zip=${process.env.ZIP}&appid=${process.env.WEATHER_API_KEY}`

const current = async () => {
  let str = 'weather'

  try {
    const response = await axios.get(url)
    const data = response.data

    str = `${data.name} ${kelvinTofahrenheit(data.main.temp)}F (${
      data.weather[0].description
    })`
  } catch (error) {
    str = error.toString()
  }

  return str
}

/**
 * @param {*} kelvin
 */
const kelvinTofahrenheit = (kelvin) => {
  return _.round((kelvin - 273.15) * 1.8 + 32)
}

exports.current = current
