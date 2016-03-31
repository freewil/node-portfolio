'use strict'

const moment = require('moment')
const debug = require('debug')('allocationSets')
const allocationSets = require('../fixtures/allocation_sets.json')

/**
 * Get the earliest date where an allocation set is available.
 *
 * @return {String} date
 */
exports.getEarliestDate = () => {
  return allocationSets[0].date
}

/**
 * Get an allocation set for the given date. If one is not available
 * for the exact date, the most recent one before that given date is used.
 *
 * @param {moment} date
 * @return {Object} allocationSet
 */
exports.getByDate = (date) => {
  var prevAllocationSet = null
  for (let allocationSet of allocationSets) {
    let allocationDate = moment(new Date(allocationSet.date))
    if (allocationDate.isSame(date, 'day')) {
      debug('same')
      return allocationSet
    } else if (allocationDate.isAfter(date, 'day')) {
      // If there isn't an allocation for the exact date,
      // then use the most recent one before the given date.
      debug('after', allocationDate.toString(), date.toString())
      return prevAllocationSet
    }
    prevAllocationSet = allocationSet
  }

  return prevAllocationSet
}
