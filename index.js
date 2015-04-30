var Converter = require('../converter');

var Application = function() {
    this.source = source;
    this.sink = sink;
    this.converter = new Converter();
};

Application.prototype.run = function () {
    // body...
};
