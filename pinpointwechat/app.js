'use strict';

console.log('Loading function');
var WechatAPI = require('wechat-api');

var appid = process.env.APP_ID
var appsecret = process.env.APP_SECRET
var api = new WechatAPI(appid, appsecret);

exports.lambda_handler = (event, context, callback) => {
    //templateId determines the template you will be using to configure the message
    var templateId = event.templateId
    //customer will be redirected to this url after they click the message
    var url = event.url;
    //openId is customer's wechat account userid
    var openid = event.openid;
    //request body which contains data to be put into the template
    var data = {
        "serviceName": {
          "value": event.serviceName,
          "color": "#173177"
        }
    };
    api.sendTemplate(openid, templateId, url, data, function (err, res) {
    if (err) return console.error(err);
    console.log(JSON.stringify(res));
});
    callback(null, event);
};
