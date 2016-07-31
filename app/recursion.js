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

    var fib = function(targetPerm, perm, a, b){
      if(targetPerm == 1 || targetPerm == 2){
        return 1
      }
      if(targetPerm <= perm){
        return a
      }
      perm = perm || 1;
      a = a || 1;
      b = b || 1;
      return fib(targetPerm,perm + 1, b, a+b)

    }
    return fib(n)

  },

  validParentheses: function(n) {

  }
};
