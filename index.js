'use strict'

module.exports = function observBind (observ1, observ2) {
  var transaction = false
  var unlisten1 = observ1(update(observ2.set.bind(observ2)))
  var unlisten2 = observ2(update(observ1.set.bind(observ1)))

  return unlisten

  function update (setter) {
    return function updateBound (value) {
      if (transaction) return
      transaction = true
      setter(value)
      transaction = false
    }
  }

  function unlisten () {
    unlisten1()
    unlisten2()
  }
}
