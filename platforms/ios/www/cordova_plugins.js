cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.cloudfiveapp.push/www/CloudFivePush.js",
        "id": "com.cloudfiveapp.push.CloudFivePush",
        "clobbers": [
            "window.CloudFivePush"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.cloudfiveapp.push": "0.0.1"
}
// BOTTOM OF METADATA
});