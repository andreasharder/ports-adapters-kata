var expect = require('chai').expect,
    WeatherService = require('../httpWeatherService'),
    FileCreator = require('../fileCreator'),
    Converter = require('../converter'),
    fs = require('fs');

    var WEATHER_URL = 'http://apis.is/weather/observations/en';

// testing Asynchronous Code
describe("WeatherService", function(){

    it('should return the observations', function(done) {
        var ws = new WeatherService(WEATHER_URL);

        ws.getObservations('1', function(response){
            expect(response).not.to.be.an('undefined');
            expect(response.results.length).to.equal(1);
            done();
        });
    });
});

describe("FileCreator", function(){

    var CSV_STRING = 'a;b\na1;b1\na2;b2\n',
        FILE_NAME = 'my.csv',
        fc;

    beforeEach(function() {
        fc = new FileCreator();
        fc.create(CSV_STRING, FILE_NAME);
    });

    it('should write to file', function(done) {

        fs.readFile(FILE_NAME, 'utf8', function (err, data) {
            expect(data).to.equal(CSV_STRING);
            done();
        });
    });
});

describe('Converter', function() {

    var CSV_HEADER = 'id;name;temperature;wind\n';

    it('should add header to output string', function() {
        var converter = new Converter();

        var result = converter.getString();

        expect(result).to.equal(CSV_HEADER);
    });

    it('should add one entry to output string', function() {
        var converter = new Converter();

        var stations = [{name: 'London', id: 1, T:'7.6', W: 'Partly cloudy'}];

        var result = converter.getString(stations);

        expect(result).to.equal(CSV_HEADER + getString(stations[0]));
    });

    it('should add multiple entries to output string', function() {
        var converter = new Converter();

        var stations = [{name: 'London', id: 1, T:'7.6', W: 'Partly cloudy'},
        {name: 'Brisbane', id: 1, T:'7.6', W: ' '}];

        var result = converter.getString(stations);

        expect(result).to.equal(CSV_HEADER + getString(stations[0]) + getString(stations[1]));
    });

    function getString(station) {
        return '' + station.id + ';' + station.name + ';' + station.T + ';' + station.W + '\n';
    }
});
