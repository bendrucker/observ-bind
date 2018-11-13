# observ-bind [![Build Status](https://travis-ci.org/bendrucker/observ-bind.svg?branch=master)](https://travis-ci.org/bendrucker/observ-bind) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/observ-bind.svg)](https://greenkeeper.io/)

> Two way data binding for observables


## Install

```
$ npm install --save observ-bind
```


## Usage

```js
var observBind = require('observ-bind')
var Observ = require('observ')

var observ1 = Observ(1)
var observ2 = Observ(2)

observBind(observ1, observ2)

observ1.set('a')
observ2()
//=> a
```

## API

#### `observBind(observ1, observ2)` -> `function`

Returns a function that will cancel the two-way binding when called.

##### observ1 / observ2

*Required*  
Type: `function`

Observable values to be bound.


## License

MIT © [Ben Drucker](http://bendrucker.me)
