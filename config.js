const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DARK-BOT~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0xwdHdhcFg3ZGc0T3ozZU0wZjkyL0pvNWppSzFjUytFSGE4a1VFSzhYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHJpK0I3d0hSditxMVBTbFpaNUFoaTJuTHZTS3FneS9sQkFzbGdVaXhSND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TkhpbDk0RU05dURoQW5ZNWYyS1A4RTVBaDFncXR5TGFLd3c3TjZ5MTBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoZkxPemVzL2FNMVV0RGFGdzFSSmZsU0Yzb1R4UDhueVF0em5IdlQ2aTBzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IbGFnemRrNXM2ekw4WXNCUnFlK3JSWlovSmFIMEVBWW5XVGtFMWdwV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllKSlRKZ3l3bXQ5ejNhWU5UejJZdFlMd2tDSExLNTN2TGpMdTFQejQxajA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0RaQ1VZUUV1eDhVbnc1Q1N6aDlmRHpRTGVYclBsWEtmZXRKQWNPYXFVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFBVelNrN3BKRlhmNDdYRFRDSktNQlJVdDF4bHJwZ2pYWXJYcXAza2VuOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJSWStvYktWeHlzZ21zeXd3RG92QldmT3FSdHpxOWI3Rzdqd3FnS2FDT2h2VThFM0pCQ1lVYUE1UitnaFN1dC80QXlhTGZ5MnFPWGl2dDJTRUVVcGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IjlmM2lSVXFMOTY2ZnJyN3lHa3lvbWxjSHorSG5GNDVuM2lLVXNldCtCMzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzAzMTIwMTc4MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzY2NzcyNkE0QkU4REU1RDQxNDRFQTIzNTczMDU5RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgzMTg1MDMxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDMxMjAxNzgyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQzlGRDVDQUIyODUzMzc4NTU4NUVGQ0I5MTY3ODdGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODMxODUwMzN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwMzEyMDE3ODJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMzOUI0RDRDNDA5NDQzQ0JENTFEQUQ2RkQ3Qjc5NzYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MzE4NTAzM31dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZVVBSQURFViIsIm1lIjp7ImlkIjoiMjM0NzAzMTIwMTc4MjoyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQxODI0ODE5Nzc3NjU4OjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKWHYvT1lCRVBIOHBOSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYbGZad2hPSWE2a1ByN3lDTkl2SER4bW9RRi85T1pqeGFpSzRZeFBYZzFnPSIsImFjY291bnRTaWduYXR1cmUiOiJxWjUyR0thbDMvbFdMN0xwYkQ1T1p1ckZsTzdpVXJUYnRpck96bDBQQWUzbFlVRDExempwcjFKWGRleE8ySmdTRkVwaC9abERhOE1VNkkrWWVlMnRDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZjFkTTR4SU5mb2xtNFhORGx6UmoyQzErZldVK1VBcHhHK2JqcWdqbzJnRVYzUElQd1g3M2tKSDZkS1RaM0VaOVJ0Slo5Tlgvc0M4Yk0yOWlhUElyaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDMxMjAxNzgyOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjVYMmNJVGlHdXBENis4Z2pTTHh3OFpxRUJmL1RtWThXb2l1R01UMTROWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzgzMTg1MDI1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUcvQyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Dark_Bot 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/7sfhxn.jpeg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Dark_Bot",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Dark_Bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "+2348132990186",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Emmaboy 26",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Dark_Bot*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/7sfhxn.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Dark_Bot*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
