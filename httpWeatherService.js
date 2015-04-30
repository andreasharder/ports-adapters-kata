var najax  = require('najax');


var WeatherService = function(url){
    this.url = url;
};

WeatherService.prototype.getObservations = function (stations, callback) {

    var self = this;

    najax.get({
        'url': self.url,
        'type': 'GET',
        'dataType': 'json',
        'data': {'stations': stations, 'time': '1h', 'anytime': '0'},
        'success': function(response) {
            callback(response);
        }
    });
};

module.exports = WeatherService;
