function size(object) {
  return Object.keys(object).length;
}

function divideObject(object, numberOfSplits) {
  if (!numberOfSplits || !object) return [];
  var keys = Object.keys(object);
  var values = Object.values(object);
  var objectLength = Math.ceil(size(object) / numberOfSplits);
  numberOfSplits = Math.min(objectLength, numberOfSplits);
  var resultArray = [];
  for (let i = 0; i < numberOfSplits; i++) {
    var currentObject = {};
    var startIndex = objectLength * i;
    var endIndex = Math.min(objectLength * (i + 1), size(object));
    keys.slice(startIndex, endIndex).map(function(key, keyIndex) {
      var globalIndex = objectLength * i + keyIndex;
      currentObject[key] = values[globalIndex];
    });
    resultArray.push(currentObject);
  }
  return resultArray;
}

module.exports = divideObject;
