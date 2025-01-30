const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01UUHBjN2dFUkc4TGVocHErMWdzT2ZuMmZGZVlWb1M1TFpGSG81Y0QwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEhISzliN2k4N2RMYTh1aU14Vmxib1hVVkZwejdsZmovRjdINFdMT1htaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SzV1LzUwL3ZmZUl2a0JVTi93UUJMb3g0WUFUencrUmM5NzRUSDlWQUZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSWJQdW4zVkdURTdlMUViR25LYlRtVFF6bDh2cStZWGlibGhpQTRNbFRzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZKVlRkcWVnYjAvMHVhYk9NeEZia0NxbjUxdXdCemt5Znk1aXFWQi9ubjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVxSE9GYTh4cUNqbjV6N2o2U3RiQVFaWjN1MTFrTnhodmxhb0ZGQnhTRWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1BCbDZxaEM5ZTVjcTd5MlB2T1FmT09INExwZmJsY0FBV04yNFpoZmlVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWNWK215dUFIL2JHclJ6ZWgraTlpR1NsSmViK25qNi81RnE5OSthZTFCcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImMrVHBaNTFRNDJPckZ2TU0ycEpJMXF4NnV6Z0sxc0RzanVxNHBjUFV1dkNwNkl5bmYrcDROZVBvWDErQm5nMnFDVkpDSkxGNmhIblMvRHJNSE9CNmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM0LCJhZHZTZWNyZXRLZXkiOiJUM1dNQUVrcEExWnNFWm1TMXVPNUU4M2JNYVF3amIzMHNObGJEckx3QmxJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImFjY291bnQiOnsiZGV0YWlscyI6IkNKYjIzcUlCRU42ODc3d0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoT1FGblhmTEhGblQydGVQbmFpV2UxN29uMjVCa1FoYTNlWFVUMmxRdFRrPSIsImFjY291bnRTaWduYXR1cmUiOiJ1RXMrbGQwdW9BYXpSM3RqMXhVcUoxNlljWHJXdVJUWldLaUNQbVo5eEZXTEpTZzBWbDRXZHc1WnBxMDdRb0VTclBiRzVwZStHQm9YcWI5V0NNWUtBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiKzRoMWluVjlhSFV5NzQ5UWJqaHY2cUlOOVFKL1FtL1RhU3RyeUZILzl3Z2x3MGswYm0zQ3Qra2RHOVpPNDhCZlg3S0c5RE4vK29tb2t2dEJCUVVkanc9PSJ9LCJtZSI6eyJpZCI6IjE4Mjk3MTU4NzAxOjI3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFkYW0gRCdIYcOvdGkiLCJsaWQiOiI3NzA1MjEzMjc4MjI1MzoyN0BsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTgyOTcxNTg3MDE6MjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVRrQloxM3l4eFowOXJYajUyb2xudGU2Sjl1UVpFSVd0M2wxRTlwVUxVNSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM4MjY4MjU4LCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
    CAPTION: process.env.CAPTION || "*ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ ᴛᴀʟᴋᴅʀᴏᴠᴇ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/UfzyhWN.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M BYTE-LITE WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "ʙʏᴛᴇ-ʟɪᴛᴇ",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 𝒃𝒚𝒕𝒆-𝒍𝒊𝒕𝒆`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
