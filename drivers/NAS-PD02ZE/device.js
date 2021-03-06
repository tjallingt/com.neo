'use strict';

const {ZwaveDevice} = require('homey-zwavedriver');

class MultiSensor_PD02Z extends ZwaveDevice {

  async onNodeInit() {
    this.registerCapability('alarm_motion', 'NOTIFICATION', {
      getOpts: {
        getOnOnline: true,
      },
    });
    this.registerCapability('measure_luminance', 'SENSOR_MULTILEVEL', {
      getOpts: {
        getOnOnline: true,
      },
    });
    this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL', {
      getOpts: {
        getOnOnline: true,
        getOnStart: false,
      },
    });
    this.registerCapability('measure_battery', 'BATTERY');
  }

}

module.exports = MultiSensor_PD02Z;
