'use strict'

const numberFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

/**
 * Format a currency number with separators and currency symbol
 *
 * @param {Number} number
 * @return {String}
 */
module.exports = (number) => {
  return numberFormat.format(number)
}
