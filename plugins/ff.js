let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*_PriceList Diamond FreeFire_*
*_Via ID - Legal 100%_*
ð° *FrihetStore* ð°
    
5 ð = Rp 820
20 ð = Rp 2.735
50 ð = Rp 6.565
70 ð = Rp 9.030
100 ð = Rp 13.405
140 ð = Rp 18.060
210 ð = Rp 27.100
355 ð = Rp 45.130
720 ð = Rp 90.255
2000 ð = Rp 248.000
7290 ð = Rp 905.000
ð¿MM= Rp 27.500
ð¦MB = Rp 137.000


â³ *_PROSES 1-10 MENIT_*
`.trim(), 'Â© Robby Catur', 'BAYAR', '.payment', m)
}
handler.command = /^ff$/i
module.exports = handler