exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce(function(previousValue,currentValue){
      return previousValue + currentValue
    });
  },

  remove: function(arr, item) {
    return arr.filter(function(value){
      return value != item;
    })
  },

  removeWithoutCopy: function(arr, item) {
    while(arr.indexOf(item) > -1){
      arr.splice(arr.indexOf(item),1)
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;

  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;

  },

  curtail: function(arr) {
    arr.shift();
    return arr;

  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)

  },

  insert: function(arr, item, index) {
    arr.splice(index,null,item)
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(function(value){
      return value == item;
    }).length

  },

  duplicates: function(arr) {
    var dupli = []
    arr.forEach(function(value){
      if ((arr.indexOf(value) != arr.lastIndexOf(value)) && dupli.indexOf(value) == -1){
        dupli.push(value)
      }
     })
     return dupli
  },

  square: function(arr) {
    arr.forEach(function(value, index){
      arr[index] = value * value;
    })
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var occurrences = [];
    arr.forEach(function(value, index){
      value == target && occurrences.push(index)
    })
    return occurrences;

  }
};
