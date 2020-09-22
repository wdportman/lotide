# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @wdportman/lotide`

**Require it:**

`const _ = require('@wdportman/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Assert whether two arrays are equal
* `assertEqual(...)`: Assert whether two primitive values are equal
* `assertObjectsEqual(...)`: Assert whether two objects are equal
* `countLetters(...)`: Count the number of times each letter occurs in a given string
* `eqArrays(...)`: Check if two arrays are equal
* `eqObjects(...)`: Check if two objects are equal
* `findKey(...)`: Takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue(...)`: Takes in an object and a value. It scans the object and returns the first key which contains the given value. 
* `flatten(...)`: Take in an array containing elements including nested arrays of elements, and returns a "flattened" version of the array
* `head(...)`: Returns the first value of an array.
* `letterPositions(...)`: Returns all the indices (zero-based positions) in the string where each character is found.
* `map(...)`: Takes in an array to map and a callback function. Returns a new array based on the results of the callback function.
* `middle(...)`: Returns the middle value of an array.
* `tail(...)`: Returns all but the first value of an array.
* `takeUntil(...)`: Collects items from a provided array until the callback provided returns a truthy value.
* `without(...)`: Returns a subset of a given array, removing unwanted elements.