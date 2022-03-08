const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "Owner Alam Botz",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Owner Alam Botz\nitem1.TEL;waid=6285888083107:6285888083107\nitem1.X-ABLabel:📍 Creator\nitem2.EMAIL;type=INTERNET:pilarkontol@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://xxx.com\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Indonesia\nitem5.X-ABLabel:───────[ ZEUS BOTZ ]───────\nEND:VCARD"
  }, {
    "displayName": "Owner REZA",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Owner REZA\nitem1.TEL;waid=6285814079819:6285814079819\nitem1.X-ABLabel:📍 Whatsapp\nitem2.EMAIL;type=INTERNET:Whatsapp@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://faq.whatsapp.com/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;⛩️ Whatsapp;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:📞 Official Bot Whatsapp\nitem5.X-ABLabel:───────[ ᴠᴇʀɪғʏ ʙʏ ᴡʜᴀᴛsᴀᴘᴘ ]───────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler
