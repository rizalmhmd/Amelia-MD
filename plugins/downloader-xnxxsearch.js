import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `uhm.. mau cari apa?\n\nContoh: ${usedPrefix + command} bokep🐒`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!\nawas jangan nonton beginian ya dek, nanti aku bilangin ke ibu kamu loh ><';
	try {
		let res = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=Fikrii&query=${text}`)
		let rest = await res.json()
		let cap = `Hasil Pencarian Dari ${text}\n`
	for (let v of rest.result) {
	 cap += `• *Title :* ${v.title}
• *Uploader :* ${v.uploader}
• *Duration :* ${v.duration}
• *Views :* ${v.views}
• *Link :* ${v.link}
`
cap +=  '\n' + '••••••••••••••••••••••••' + '\n'
    }
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ["xnxxsearch"].map(v => v + ' <query>')
handler.tags = ['downloader', 'premium']
handler.command = /^xnxx(s?earch)?$/i

handler.register = true
handler.premium = true
handler.private = true

export default handler
