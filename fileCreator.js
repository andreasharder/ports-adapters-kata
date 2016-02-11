var fs = require('fs');

var FileCreator = function() {
};

FileCreator.prototype.create = function(csv_string, fileName) {

    fs.writeFile(fileName, csv_string, function(err) {
        if(err) {
            return console.log(err);
        }
    });
};

module.exports = FileCreator;
