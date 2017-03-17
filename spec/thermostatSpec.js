describe("Thermostat", function() {

  beforeEach(function() {
    thermo = new Thermostat();
  });

  describe("temperature", function() {
    it("default is set at 20 degrees", function() {
      expect(thermo.temperature).toEqual(20);
    });
    it("goes up", function() {
      thermo.tempIncrease();
      expect(thermo.temperature).toEqual(21);
    });
    it("goes down", function() {
      thermo.tempDecrease();
      expect(thermo.temperature).toEqual(19);
    });
    it("doesn't go below 10 degrees", function() {
      thermo.temperature = 10;
      thermo.tempDecrease();
      expect(thermo.tempDecrease(1)).toEqual("Cannot go below 10 degrees")
    });
    it("doesn't go above 32 degrees", function() {
      thermo.temperature = 32;
      thermo.powerSavingOff();
      expect(thermo.tempIncrease()).toEqual("Cannot go above 32 degrees")
    });
    it("resets the temperature back to 20 degrees", function() {
      thermo.tempIncrease();
      thermo.reset();
      expect(thermo.temperature).toEqual(20);
    });

  });

  describe("power-saving mode", function() {
    it("can turn power-saving mode off", function() {
      console.log(thermo);
      thermo.powerSavingOff();
      expect(thermo.powerSaving).toEqual(false);
    });
    it("can turn power-saving mode on", function() {
      thermo.powerSavingOff();
      console.log(thermo);
      thermo.powerSavingOn();
      expect(thermo.powerSaving).toEqual(true);
    });
    it("changes the max temperature while power-saving is on", function() {
      thermo.temperature = 25;
      thermo.powerSavingOn();
      thermo.tempIncrease();
      expect(thermo.tempIncrease()).toEqual("Cannot go above 25 degrees")
    });
  });

  describe('energy usage', function() {

    it('reports low energy usage when temp is less than 18 degrees', function() {
      thermo.temperature = 17;
      expect(thermo.setEnergyUsage()).toEqual('low-usage');
    });

    it('reports medium energy usage when temp is less than 25 degrees', function() {
      thermo.temperature = 24;
      expect(thermo.setEnergyUsage()).toEqual('medium-usage');
    });

    it('reports high energy usage when temp is over 24 degrees', function() {
      thermo.temperature = 25;
      expect(thermo.setEnergyUsage()).toEqual('high-usage');
    });

  });

});
