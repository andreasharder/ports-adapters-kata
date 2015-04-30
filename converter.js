
var Converter = function() {

};

Converter.prototype.getString = function(stations) {

    var CSV_HEADER = 'id;name;temperature;wind\n';
    var observations = '';

    try {
        for (var i = 0; i < stations.length; i++) {

            var station = stations[i];
            var obs = new Observation(station.id, station.name, station.T, station.W);
            observations += obs.toString();
        }
    } catch (e) {
        throw e;
    } finally {
        return CSV_HEADER + observations;
    }
};


var Observation = function(id, name, temperature, wind) {
    this.id = id;
    this.name= name;
    this.temperature = temperature;
    this.wind = wind;
};

Observation.prototype.toString = function() {

    var self = this;

    return '' + self.id + ';' + self.name + ';' + self.temperature + ';' + self.wind + '\n';
};


module.exports = Converter;
