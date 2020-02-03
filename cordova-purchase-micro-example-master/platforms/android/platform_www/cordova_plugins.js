cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cc.fovea.cordova.purchase.InAppBillingPlugin",
      "file": "plugins/cc.fovea.cordova.purchase/www/store-android.js",
      "pluginId": "cc.fovea.cordova.purchase",
      "clobbers": [
        "store"
      ]
    }
  ];
  module.exports.metadata = {
    "cc.fovea.cordova.purchase": "8.1.1",
    "cordova-plugin-whitelist": "1.3.4"
  };
});