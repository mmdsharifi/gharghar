//my first telegram bot

var token = '222053642:AAEdbiE7OSRlCyDsJP7-idwFxFZ9j-QVGQc';

var Bot = require('node-telegram-bot-api');
    bot = new Bot(token , {polling: true });

console.log('bot server started ...');

bot.onText( /^\/say (.+)$/ , function (msg , match) {
  var name = match[1];
  bot.sendMessage(msg.chat.id , 'Hellllo ' + name + '!').then( function () {
    //..
  });
});

bot.onText( /^\/sum((\s+\d+)+)$/ , function (msg , match) {
  var result = 0;
  match[1].trim().split(/\s+/).forEach(function (i){
    result += (+i || 0);
  });
  bot.sendMessage(msg.chat.id , result).then(function (){
    //
  })
});
