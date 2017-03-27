const async = require('async');
const fs = require('fs');
const osenv = require('osenv');
const path = require('path');

function getUsersHomeFolder() {
  return osenv.home();
}

function getFilesInFolder(folderPath, cb) {
  fs.readdir(folderPath, cb);
}


// returns the data of the single file
function inspectAndDescribeFile(filePath, cb) {
  var result = {
    // path.basename returns the last portion of the path. eg. index.html
    file: path.basename(filePath),
    path: filePath,
    type: ''
  };

  fs.stat(filePath, function (err, stat) {
    if (err) cb(err);
    if (stat.isFile()) result.type = 'file';
    if (stat.isDirectory()) result.type = 'directory';
    cb(err, result);
  });
}

// inspects all the files given
function inspectAndDescribeFiles(folderPath, files, cb) {
  async.map(files, function (file, internalCb) {
    var resolvedFilePath = path.resolve(folderPath, file);
    inspectAndDescribeFile(resolvedFilePath, internalCb);
  }, cb);
}

module.exports = {
  getUsersHomeFolder,
  getFilesInFolder,
  inspectAndDescribeFiles
};
