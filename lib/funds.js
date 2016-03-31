'use strict'

const funds = require('../fixtures/funds.json')

/**
 * Get the information (name, symbol, assetClass) of a fund.
 *
 * @param {String} symbol
 * @return {Object} fund
 */
exports.getBySymbol = (symbol) => {
  for (let fund of funds) {
    if (fund.symbol == symbol) {
      return fund
    }
  }
  return null
}
