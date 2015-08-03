'use strict'

var test = require('tape')
var Observ = require('observ')
var bind = require('./')

test(function (t) {
  var observ1 = Observ(1)
  var observ2 = Observ(2)

  var unbind = bind(observ1, observ2)

  t.equal(observ1(), 1)
  t.equal(observ2(), 2)

  observ1.set('a')
  t.equal(observ1(), 'a')
  t.equal(observ2(), 'a')

  observ2.set('b')
  t.equal(observ1(), 'b')
  t.equal(observ2(), 'b')

  unbind()

  observ1.set('foo')
  t.equal(observ1(), 'foo')
  t.equal(observ2(), 'b')

  t.end()
})
