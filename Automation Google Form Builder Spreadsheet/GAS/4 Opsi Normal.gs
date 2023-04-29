function NizarNormalForm() {
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName('aja'); //sesuaikan nama sheet di ms.excel
  var jumlahBaris = (sheet.getDataRange().getNumRows())-1; //proses perhitungan jumlah baris soal
  var pertanyaanKu = sheet.getRange(2,2,jumlahBaris,1).getValues(); //posisi kolom pertanyaan ==> 1 kolom
  var kunciJawabanKu = sheet.getRange(2,3,jumlahBaris,1).getValues(); //posisi kunci jawaban ==> 1 kolom
  
  // Penjelasan getrange
  // sheet.getRange(2,4,jumlahBaris,1)
  // 2 ==> baris ke-2
  // 4 ==> kolom ke-4
  // jumlahBaris ==> Jumlah Baris
  // 1 ==> 1 kolom

  // sheet.getRange(2,3,jumlahBaris,4)
  // 2 ==> baris ke-2
  // 3 ==> kolom ke-3
  // jumlahBaris ==>  Jumlah Baris
  // 4 ==> 4 kolom (hitungan dari kolom ke-3 ==> kolom 3,4,5,6)

  var jawaban2 = sheet.getRange(2,4,jumlahBaris,1).getValues(); //posisi jawaban ke-2 ==> 1 kolom (baris ke 2 kolom ke 4)
  var jawaban3 = sheet.getRange(2,5,jumlahBaris,1).getValues(); //posisi jawaban ke-3 ==> 1 kolom
  var jawaban4 = sheet.getRange(2,6,jumlahBaris,1).getValues(); //posisi jawaban ke-4 ==> 1 kolom
  var opsiJawabanKu = sheet.getRange(2,3,jumlahBaris,4).getValues(); //posisi pilihan jawaban ==> 5 kolom 
  
  // Fitur Poin
  // var poinKu = sheet.getRange(2,7,jumlahBaris,1).getValues(); //posisi poin ==> 1 kolom 

  // Fitur Acak Opsi Jawaban
  // var acakOpsiKu = opsiJawabanKu.map(acakOpsiJawaban); //persiapan fungsi acak opsi jawaban
  //Logger.log(acakOpsiKu);
  Logger.log(kunciJawabanKu);
  Logger.log(jawaban2);
  Logger.log(jawaban3);
  Logger.log(jawaban4);
  Logger.log(jumlahBaris);
  Logger.log(pertanyaanKu);

  var form = FormApp.create('halo'); //Mulai membuat google form
  // form.setIsQuiz(true); //menjadikan form sebagai quiz

  for(var i=0;i<jumlahBaris;i++){

    var addItem = form.addMultipleChoiceItem();
    addItem.setTitle(pertanyaanKu[i][0])
    .setRequired(true) //menentukan bahwa soal wajib dijawab
    // .setPoints(poinKu[i][0]) //menentukan poin tiap pertanyaan 
    .setChoices([
      addItem.createChoice(opsiJawabanKu[i][0]), //posisi kunci jawaban
      addItem.createChoice(opsiJawabanKu[i][1]),
      addItem.createChoice(opsiJawabanKu[i][2]),
      addItem.createChoice(opsiJawabanKu[i][3])
    ]);
  }
}