let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *@6285888083107 Ada yang memanggil anda :V*`, m)

  conn.reply(m.chat, `
Kak Pilar⁩ (@6285888083107  ), Ada Yang Manggil anda😊
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6285888083107 /i
handler.command = new RegExp

module.exports = handler
