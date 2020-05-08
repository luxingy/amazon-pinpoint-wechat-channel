'use strict';

console.log('Loading function');
var WechatAPI = require('wechat-api');

var appid = process.env.APP_ID
var appsecret = process.env.APP_SECRET
var api = new WechatAPI(appid, appsecret);

exports.lambda_handler = (event, context, callback) => {
    //templateId determines the template you will be using to configure the message
    //customer will be redirected to this url after they click the message
    //openId is customer's wechat account userid
    var { templateId, url, openid, ...data } = event;

    //request body which contains data to be put into the template
    var body = {};
    Object.keys(data).forEach(item => {
        body[item] = { "value": data[item] };
    });
    api.sendTemplate(openid, templateId, url, body, function (err, res) {
    if (err) return console.error(err);
    console.log(JSON.stringify(res));
});
    callback(null, event);
};
