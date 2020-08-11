const express = require('express');
const bodyParser = require('body-parser');
const VkBot = require('node-vk-bot-api/lib');

const app = express();
const bot = new VkBot({
  token: '298e70a4126c2bea12cdd68a27876f0d7749c69c651d11a3981b0fec11878c0cdf3142e0842b6d210a05a',
  confirmation: 'e4766b31',
});

bot.on((ctx) => {
  ctx.reply('Hello!');
});

app.use(bodyParser.json());

app.post('/', bot.webhookCallback);

app.listen(process.env.PORT);