import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
   if (!args[0]) return m.reply(`Masukan Url TikTok !`)
   let rest = await fetch(`https://api.ibeng.tech/api/download/tiktok?url=${args[0]}&apikey=ibeng`)
   let res = await rest.json()
   let { title, author, video, audio, videoWM } = res
   let kon = `*Nama* : ${username}
   *Description* : ${description}

Author : ${author}

Powered by © #${wm}`
m.reply(wait)
await conn.sendFile(m.chat, video, 'tt.mp4', kon, m)
}
handler.help = ['ttnowm']
handler.tags = ['downloader']
handler.command = /^(ttnowm)$/i

handler.premium = false
handler.limit = true 

export default handler
