let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*_PriceList Diamond ML A_*
*_Via ID - Legal 100%_*
ð° *FrihetStore* ð°

86 ð = Rp18.550
172 ð =Rp37.100 
257 ð = Rp55.650 
344 ð = Rp74.200
429 ð = Rp92.750
514 ð = Rp111.300
600 ð = Rp130.000
706 ð = Rp148.500 
878 ð = Rp185.500 
963 ð = Rp204.100 
1050 ð = Rp222.600 
1220 ð = Rp259.700 
1412 ð = Rp296.800 
2195 ð =Rp450.000
3073 ð = Rp630.000
3688 ð = Rp740.000
4032 ð = Rp815.000 
5532 ð = Rp1.150.000 
6238 ð = Rp1.300.000 
9288 ð = Rp1.900.000 
â­SL/TW	 Rp125.000
ðSL PLUS	 Rp285.000


â³ *_PROSES 1-10 MENIT_*
â ï¸ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*
`.trim(), 'Â© Robby Catur', 'BAYAR', '.payment', m)
}

handler.command = /^mla$/i
module.exports = handler