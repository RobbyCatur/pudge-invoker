let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*_PAYMENT/PEMBAYARAN_*
π° *FrihetStore* π°

π³ SHOPE : 082288316705 
 
π³ OVO : 082288316705

π³ NEO BANK : 082288316705

π³ BCA VIRTUAL ACCOUNT : 1375300000623051

π³DANA/GOPAY : MINTA KE ADMIN BERUPA QRIS ATAU BUKU WARUNG
 
π³ Qris/Alfamart/Indomaret
Pm Langsung Ke admin

*NOTE :*
SEMUA PEMBAYARAN ATAS NAMA *MUHAMMAD ZULFADLI*
`.trim(), 'Β© Robby Catur', 'MENU', '.frihetstore', m)
  }
handler.command = /^payment$/i
module.exports = handler
