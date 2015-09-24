'use strict'

module.exports = function observBind (observ1, observ2) {
  var transaction = false
  var unlisten1 = observ1(update(observ2))
  var unlisten2 = observ2(update(observ1))

  return unlisten

  function update (destination) {
    return function updateBound (value) {
      if (transaction) return
      transaction = true
      destination.set(value)
      transaction = false
    }
  }

  function unlisten () {
    unlisten1()
    unlisten2()
  }
}
