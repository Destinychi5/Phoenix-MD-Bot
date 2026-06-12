const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
};

const toBool = (x) => (x && (x.toLowerCase() === 'true' || x.toLowerCase() === 'on')) || false;
const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
   //__________________________________________________________________________________________________________________________________________
  // 🖥️ For Enabling Commands Like AUTO_MSG_READ Type true For Disabling Type false  
 // ℹ️ Removed commands like welcome,goodbye etc and other commands and features that cause whatsapp account/group ban thank you!
//____________________________________________________________________________________________________________________________________________  
  //🤖 BOT CONFIGURATION
  SESSION_ID: process.env.SESSION_ID || '',
  STICKER_DATA: process.env.STICKER_DATA || '🎯ᴘʜᴏᴇɴɪx-ᴍᴅ;ᴀʙʜɪꜱʜᴇᴋ ꜱᴜʀᴇꜱʜ🍀',
  ALIVE_DATA: process.env.ALIVE_DATA || '👋 ʜᴇʏ sender, ɪ ᴍ *Destiny Bug Bot* ᴀʟɪᴠᴇ ɴᴏᴡ!\n\n📌 ᴛʏᴘᴇ *menu* ᴛᴏ ɢᴇᴛ ᴍʏ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ.\n\n*ᴘʟᴀᴛꜰᴏʀᴍ:* &platform\n*ʀᴜɴᴛɪᴍᴇ:* &runtime;https://ibb.co/DHw9DccV',
  AUDIO_DATA: process.env.AUDIO_DATA || 'Destiny Bug Bot;Richard Destiny;https://ibb.co/DHw9DccV',
  BOT_INFO: process.env.BOT_INFO || 'Destiny Bug bot;Richard Destiny;919074692450;https://ibb.co/DHw9DccV', 
  PREFIX: process.env.PREFIX || '😒', //Type false to use without prerix
  MODE: process.env.MODE || 'private', //Type public to change bot mode to public
  SUDO: process.env.SUDO || '919074692450, 918157993101',
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY || '',
  TIMEZONE: process.env.TIMEZONE || "Asia/Kolkata",
  BOT_LANG: process.env.BOT_LANG || 'EN',
  START_MSG: toBool(process.env.START_MSG || 'true'),
  ERROR_MSG: toBool(process.env.ERROR_MSG || 'true'), 

  //🛜 DEPLOY/HOSTING NAME AND API KEY
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  RENDER_NAME: process.env.RENDER_NAME || '',
  RENDER_API: process.env.RENDER_API || '',
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || '',
  KOYEB_API_KEY: process.env.KOYEB_API_KEY || '',
  
  //AUTOMATION 🎯
  AUTO_ALWAYS_ONLINE: toBool(process.env.AUTO_ALWAYS_ONLINE || 'true'),
  AUTO_CALL_REJECT: toBool(process.env.AUTO_CALL_REJECT || 'true'),
  AUTO_CALL_REJECT_MSG: process.env.AUTO_CALL_REJECT_MSG || '*ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ᴄᴀʟʟ ʙʟᴏᴄᴋɪɴɢ*\n\nꜱᴏʀʀʏ ᴄᴀʟʟꜱ ᴀʀᴇ ɴᴏᴛ ᴀʟʟᴏᴡᴇᴅ\n\nᴘʟᴇᴀꜱᴇ ꜱᴇɴᴅ ᴀ ᴛᴇxᴛ ᴍᴇꜱꜱᴀɢᴇ/ᴠᴏɪᴄᴇ ᴍᴇꜱꜱᴀɢᴇ\n\n>  Destiny Bug Bot',
  AUTO_MSG_READ: toBool(process.env.AUTO_MSG_READ || 'false'),
  AUTO_MSG_REACT: toBool(process.env.AUTO_MSG_REACT || 'false'),

  //AUTOMATION-FIX SOON 🎯
  AUTO_STATUS_SAVER: toBool(process.env.AUTO_STATUS_SAVER || 'true'),
  AUTO_STATUS_VIEW: toBool(process.env.AUTO_STATUS_VIEW || 'true'),
  AUTO_STATUS_REPLY: toBool(process.env.AUTO_STATUS_REPLY || 'true'),
  AUTO_STATUS_REPLY_MSG: process.env.AUTO_STATUS_REPLY_MSG || '_*Nice Status Bro 🍀*_',
  AUTO_STATUS_REACT: toBool(process.env.AUTO_STATUS_REACT || 'true'),
  AUTO_STATUS_REACT_EMOJIS: process.env.AUTO_STATUS_REACT_EMOJIS || ['💎','🤍','🍀','💀','📈','🎯','🫶','👀','☠️'],
//_______________#OTHER(⚠️ Warning Dont Edit Anything Here)______________________________________________________________________________________
  BASE_URL: 'https://abhi-api.vercel.app/', // Don't Change This
  BRANCH: 'main',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false })
};
