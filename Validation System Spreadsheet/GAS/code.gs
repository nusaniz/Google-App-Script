function doGet(e){
// Menampilkan file "index.html"
  var x = HtmlService.createTemplateFromFile("index");
  var y = x.evaluate();
// Izin Iframe
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
                    //  .evaluate()
                    //  setTitle("CodyLab");

  // return HtmlService.createTemplateFromFile("index")
  //                    .evaluate()
  //                    .setTitle("CodyLab");
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function sub(v){
  // Koneksi ID Spreadsheet
  var ss = SpreadsheetApp.openById("1foLrt5fhL8fydJqU9ug5kGnV-b5jTcg6aJb3taeR9lw");

  // Koneksi Sheet Tab
  var sheet = ss.getSheetByName("Form Responses 1");

  var  flag  =  1 ;

  // Identifier (data kata kunci pencarian)
  // Kata kunci pencarian adalah kolom B (2)
  // Kolom B (2), dimulai dari baris ke-2 (i,2)
  // col B - Nomor Sertifikat
  var lr = sheet.getLastRow();
      for(var i = 2;i <= lr;i++){
  if(v.roll == sheet.getRange(i, 2).getValue()){
      flag = 0;

  // Mengambil data kolom pada sheet
    // Header   
        var h1 = sheet.getRange(1, 1).getValue(); // Header - Timestamp
        var h2 = sheet.getRange(1, 2).getValue(); // Header - ID
        var h3 = sheet.getRange(1, 3).getValue(); // Header - Nama Lengkap
        var h4 = sheet.getRange(1, 4).getValue(); // Header - Kontak (Whatsapp)
        var h5 = sheet.getRange(1, 5).getValue(); // Header - Status
        var h6 = sheet.getRange(1, 6).getValue(); // Header - As
        var h7 = sheet.getRange(1, 7).getValue(); // Header - Ikut
    // Data
        var d1 = sheet.getRange(i, 1).getValue(); // Timestamp
        var d2 = sheet.getRange(i, 2).getValue(); // ID
        var d3 = sheet.getRange(i, 3).getValue(); // Nama Lengkap
        var d4 = sheet.getRange(i, 4).getValue(); // Kontak (Whatsapp)
        var d5 = sheet.getRange(i, 5).getValue(); // Status
        var d6 = sheet.getRange(i, 6).getValue(); // As
        var d7 = sheet.getRange(i, 7).getValue(); // Ikut



  // Eksekusi Peengembalian Hasil Pencarian (modifikasi)
  // var cekdong = '<p>Saudara/i <strong>'+b1+'</strong> '+b2+' dengan nomor <strong>'+v.roll+'</strong> dalam roll '+'<a     href="'+b3+'">'+b1+'-'+v.roll+'.pdf'+'</a>'+' sebagai '+m2;
  var cekdong = '<p>Saudara/i <strong>'+d3+'</strong> '+' dengan nomor <strong>'+d2+'</strong> '+d5+' sebagai '+d6+' dan '+d7+' dengan kontak '+d4+' mendaftar pada '+d1;
  return cekdong;
    }
   }


  // Peringatan jika data tidak terdaftar
        if(flag==1){
            var cekdong = '<span style=padding:2rem;background-color:#ff000085;display:block;border-radius:5px;>Tidak Terdaftar</span>';
          return cekdong;
        };


};
