# divide-object
Divide object returning and array of k objects (ideally equal in size) 
O(n)
```javascript
var divideObject = require("divide-object");
var object = {
  1: {
    id: 1
  },
  2: {
    id: 2
  },
  3: {
    id: 3
  },
  4: {
    id: 4
  },
  5: {
    id: 5
  },
  6: {
    id: 6
  },
  7: {
    id: 7
  },
  8: {
    id: 8
  },
  9: {
    id: 9
  }
};
var numberOfSplits = 3
divideObject(x, numberOfSplits);
// [
//   { '1': { id: 1 }, '2': { id: 2 }, '3': { id: 3 } },
//   { '4': { id: 4 }, '5': { id: 5 }, '6': { id: 6 } },
//   { '7': { id: 7 }, '8': { id: 8 }, '9': { id: 9 } }
// ]
```
