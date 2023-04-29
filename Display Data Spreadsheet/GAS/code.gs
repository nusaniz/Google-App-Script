function doGet(e) {
  // Menampilkan Index.html ketika akses url appscript
  var x = HtmlService.createTemplateFromFile("Index");
  
  // Mengizinkan di Iframe
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}

function getSheetData()  { 
  // Koneksi Spreadsheet
  var a= SpreadsheetApp.getActiveSpreadsheet();

  // Koneksi Sheet
  var b = a.getSheetByName('Sheet1'); 

  // Mengambil semua value pada sheet yang dipilih
  var c = b.getDataRange();
  
  // Menambilkan value yang telah diambil
  return c.getValues();  
}