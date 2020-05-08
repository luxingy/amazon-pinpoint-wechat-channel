'use strict';

console.log('Loading function');
var WechatAPI = require('wechat-api');

var appid = process.env.APP_ID
var appsecret = process.env.APP_SECRET
var api = new WechatAPI(appid, appsecret);

exports.lambda_handler = (event, context, callback) => {
    // var templateId = '7BCdeF9hIJ0Kl-aB6KvJ59ZM7jfj6fBIf1OL_-dDFb6'
    var templateId = event.templateId
    console.log(">>>>>>>>");
    console.log(templateId);
    // URL置空，则在发送后,点击模板消息会进入一个空白页面（ios）, 或无法点击（android）
    // var url =  'z.cn';
    var url = event.url;
    // var openid = 'opDi3TmaFiF98ABCDEF_9M9nHJK';
    var openid = event.openid;
    var data = {};
    api.sendTemplate(openid, templateId, url, data, function (err, res) {
    if (err) return console.error(err);
    console.log(JSON.stringify(res));
});
    callback(null, event);
};
