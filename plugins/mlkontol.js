let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
MLBB PAKET KONTOL

86π    	18.850
172π  	Rp37.700,00
257π  	Rp57.000,00
344π  	Rp76.100,00
429π  	Rp95.000,00
514π   Rp117.000,00
600π  	Rp137.000,00
706π  	Rp155.600,00
878π   Rp199.500,00
963π  	Rp219.450,00
1050π	Rp239.508,00
1412π	Rp320.000,00
2194π	Rp476.525,00
3688π	Rp800.000,00
5532π	Rp1.290.000,00
9288π	Rp1.980.000,00
SL / TL	Rp132.100,00
`.trim(), 'Β©Robby Catur', 'BAYAR', '.bayar', m)
}
handler.command = /^mlkontol$/i
module.exports = handler