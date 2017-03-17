function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
  this.MAX_TEMP = 25;
  this.energy = 'medium-usage';
  this.amount = 1
};

Thermostat.prototype.tempIncrease = function() {
  if (this._checkMax() === true)
    return "Cannot go above " + this.MAX_TEMP + " degrees" ;
  else {
    this.temperature += this.amount;
  };
};

Thermostat.prototype.tempDecrease = function() {
  if (this._checkMin() === true)
    return "Cannot go below 10 degrees";
  else {
    this.temperature -= this.amount
  };
};

Thermostat.prototype._checkMin = function() {
  if (this.temperature - this.amount < 10)
  return true;
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
  this.MAX_TEMP = 32;
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
  this.MAX_TEMP = 25;
};

Thermostat.prototype.powerSavingSwitch = function () {
  if(this.powerSaving === true)
    this.powerSavingOff();
  else {
    this.powerSavingOn();
  }

};

Thermostat.prototype._checkMax = function() {
  if (this.temperature + this.amount > this.MAX_TEMP)
  return true;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.setEnergyUsage = function() {
  var x = this.temperature;
  console.log("Function");
  switch (true) {
    case (this.temperature < 18):
      this.energy = 'low-usage';
      // return this.energy;
      break;
    case (x < 25):
       this.energy = 'medium-usage';
      // return this.energy;
      break;
    case ( x > 24):
       this.energy = 'high-usage';
      // return this.energy;
      break;
  }
  return this.energy;
};

Thermostat.prototype.getDegrees = function() {
  var degrees;
  degrees = (this.temperature - 10) * 5.9090909091
  degrees = 230 + degrees
  return degrees
};

Thermostat.prototype.powerSavingColor = function(){
  if (this.powerSaving === true)
    return 'green'
  else {
    return 'red'
  }
}
