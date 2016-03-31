'use strict'

const moment = require('moment')
const debug = require('debug')('historicalPrices')
const historicalPrices = require('../prices/historical_prices.json')

/**
 * Get the historical price for a fund on a given date.
 *
 * @param {String} symbol
 * @param {moment} date
 * @return {Number}
 */
exports.getPrice = (symbol, date) => {
  var prevPrice = null
  for (let price of historicalPrices) {
    if (price.symbol != symbol)
      continue

    let priceDate = moment(price.date)

    if (priceDate.isSame(date, 'day') || priceDate.isBefore(date, 'day')) {
      debug('same or before', price)
      return price.price
    }
    prevPrice = price.price
  }

  return null
}
