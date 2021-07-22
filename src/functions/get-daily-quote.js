const fetch = require('node-fetch')

const QUOTE_API = 'https://type.fit/api/quotes'
const START_DATE = new Date('Thu Jul 22 2021 00:00:00 GMT+0200')

exports.handler = async function (event, context) {
  const data = await fetch(QUOTE_API)
  const allQuotes = await data.json()
  const today = new Date()

  const differenceInDays =
    (today.getTime() - START_DATE.getTime()) / (1000 * 3600 * 24)

  const quoteOfTheDay =
    allQuotes[Math.floor(differenceInDays % allQuotes.length)]

  return {
    statusCode: 200,
    body: JSON.stringify(quoteOfTheDay),
  }
}
