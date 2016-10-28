# Javascript isImageElement function
isImageElement attempts to determine if a supplied variable is a HTMLImageElement.
## Usage
```
    var o = document.createElement('div');
    isImageElement(o) === false;
    o = document.createElement('img');
    isImageElement(o) === true;
```

## Methods

1. `instanceof HTMLImageElement`
2. `tagName === 'img'`

## Issues

* Current Jasmine config prevents require, hence includes all code for isHTMLElement in Jasmine tests _not good_
* Needs node name?
* Any way to establish from properties, e.g. naturalWidth?
* Needs proper testing log, e.g. browser checks
* NS version uses IMNS, not currently using ES6 namespacing
