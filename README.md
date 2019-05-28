# mapnumericalrange

![npm (scoped)](https://img.shields.io/npm/v/@almcd/mapnumericalrange.svg)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@almcd/mapnumericalrange.svg)

Re-maps a number from one range to another.

## Install
```
$ npm install @almcd/mapnumericalrange
```

## Syntax
```js
mapNumericalRange(value, start1, stop1, start2, stop2);
```

## Parameters

`value`	Number: the value to be converted

`start1` Number: the lower bound of the value's current range

`stop1`	Number: the upper bound of the value's current range

`start2` Number: the lower bound of the value's target range

`stop2` Number: the upper bound of the value's target range

## Usage
```js
const mapNumericalRange = require("@almcd/mapnumericalrange");

mapNumericalRange(25, 0, 100, 500, 1000);
//=> 625
```
