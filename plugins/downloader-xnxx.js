import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `uhm.. mau download apa?\n\nContoh: ${usedPrefix + command} link xnxx`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!';
	try {
		let res = await fetch(`ttps://api.lolhuman.xyz/api/xnxx?apikey=Fikrii&url=${text}`)
		if (res.status !== 200) throw 'Nice'
    let w = await res.json()
    let x = w.result
    let caption = `*${htki} xnxxdl ${htka}*
    
*💌 title:* ${x.title}
*🗂️ rating:* ${x.rating}
*📊 duration:* ${x.duration}
    `
    conn.send2ButtonImg(m.chat, x.thumbnail, caption, author,
'LOW', '.xnxxvid ' + x.link.link1,
'HIGH', '.xnxxvid ' + x.link.link2
, m)
	} catch (e) {
		throw e;
	}
}
handler.help = ["xnxxdl"].map(v => v + ' <url>')
handler.tags = ["downloader", 'premium']
handler.command = /^(xnxxdl|dlxnxx)$/i
handler.register = true
handler.premium = true
handler.private = true

export default handler
