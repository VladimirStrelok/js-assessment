exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {

    return fn.apply(null,arr);

  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function(str2){return str + ", " + str2}
  },

  makeClosures: function(arr, fn) {
    var closures = [];
    for (var i = 0; i < arr.length; i++) {
      closures.push(
        (function(number){
          return function(){
            return number;
          }
        })(fn(arr[i]))
      )
    }
    return closures;

  },

  partial: function(fn, str1, str2) {
    return function(punctuation){
      return fn(str1,str2,punctuation)
    }
  },

  useArguments: function() {
    return arraysAnswers.sum(Array.prototype.slice.call(arguments))
  },

  callIt: function(fn) {

    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return fn.apply(null, args)

  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length)
    return function(){
      var args2 = args.concat(Array.prototype.slice.call(arguments))
      return fn.apply(null,args2)
    }

  },

  curryIt: function(fn) {
    return function(a){
      return function(b){
        return function(c){
          return fn(a,b,c);
        }
      }
    }

  }
};
