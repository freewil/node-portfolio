'use strict'

const fundPrices = require('../prices/fund_prices.json')

/**
 * Get latest price for the given fund symbol
 *
 * @param {String} symbol
 * @return {Number}
 */
exports.getPrice = (symbol) => {
  for (let fundPrice of fundPrices) {
    if (fundPrice.symbol == symbol) {
      return fundPrice.price
    }
  }
  return null
}
