exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    var getList = function(fileData,targetDir){
      var fileList = [];
      if(targetDir){
        if(fileData.dir == targetDir){
          fileList = fileList.concat(getList(fileData))
        }
        else{
          for(var i = 0; i < fileData.files.length; i++){
            var file = fileData.files[i];
            if(file.hasOwnProperty("dir")){
              fileList = fileList.concat(getList(file,targetDir))
            }
          }
        }
      }
      else{
        for(var i = 0; i < fileData.files.length; i++){
          var file = fileData.files[i];
          if(file.hasOwnProperty("files")){
            fileList = fileList.concat(getList(file))
          }
          else{
            fileList.push(file)
          }
        }
      }
      return fileList;
    }
    return getList(data,dirName);
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

    function fib(n){

      if( n == 1 || n == 2){
        return 1;
      }
      else return fib(n-1) + fib(n-2)
    }
    return fib(n)
  },

  validParentheses: function(n) {

  }
};
