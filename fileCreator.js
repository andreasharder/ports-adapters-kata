var fs = require('fs');

var FileCreator = function() {
};

FileCreator.prototype.create = function(csv_string, fileName, callback) {

    fs.writeFile(fileName, csv_string, function(err) {
        if(err) {
            return console.log(err);
        }
    });

    callback();
};

module.exports = FileCreator;
