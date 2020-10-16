'use strict';

const Homey = require('homey');

class WallSwitchSingle_SC02Z extends Homey.Driver {

  onInit() {
    super.onInit();

    this.ledOnAction = this.homey.flow.getActionCard('NAS-SC02Z_backlight_mode');
    this.ledOnAction.registerRunListener((args, state) => {
      return args.device.ledOnRunListener(args, state);
    });
  }

}

module.exports = WallSwitchSingle_SC02Z;