const fileSystem = require('./fileSystem');
const userInterface = require('./userInterface');

function main() {
  var folderPath = fileSystem.getUsersHomeFolder();
  userInterface.loadDirectory(folderPath)(window);
}

window.onload = main;
