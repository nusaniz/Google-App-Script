function popForm() {



    var ss = SpreadsheetApp.getActive();


    var sheet = ss.getSheetByName('Copy of aja');
    var numberRows = (sheet.getDataRange().getNumRows()-2);
    var soal = sheet.getRange(3, 1, numberRows, 1).getValues();
    var myAnswers = sheet.getRange(3, 2, numberRows, 1).getValues();
    var myGuesses = sheet.getRange(3, 2, numberRows, 5).getValues();
    var myShuffled = myGuesses.map(shuffleEachRow);
    var nilai = sheet.getRange(3,7,numberRows,1).getValues(); //posisi poin ==> 1 kolom 
    // var nilai = 5;

    // Log
    Logger.log(myShuffled);
    Logger.log(myAnswers);

    var form = FormApp.create('Soal Biologi');
    form.setIsQuiz(true);
    for (var i = 0; i < numberRows; i++) {
        if (myShuffled[i][0] == myAnswers[i][0]) {
            var addItem = form.addMultipleChoiceItem();
            addItem.setTitle(soal[i][0])
                .setPoints(nilai[i][0]) //menentukan poin tiap pertanyaan 
                .setChoices([
                    addItem.createChoice(myShuffled[i][0], true),
                    addItem.createChoice(myShuffled[i][1]),
                    addItem.createChoice(myShuffled[i][2]),
                    addItem.createChoice(myShuffled[i][3]),
                    addItem.createChoice(myShuffled[i][4])
                ]);

        }

        else if (myShuffled[i][1] == myAnswers[i][0]) {
            var addItem = form.addMultipleChoiceItem();
            addItem.setTitle(soal[i][0])
                .setPoints(nilai[i][0]) //menentukan poin tiap pertanyaan 
                .setChoices([
                    addItem.createChoice(myShuffled[i][0]),
                    addItem.createChoice(myShuffled[i][1], true),
                    addItem.createChoice(myShuffled[i][2]),
                    addItem.createChoice(myShuffled[i][3]),
                    addItem.createChoice(myShuffled[i][4])
                ]);

        }

        else if (myShuffled[i][2] == myAnswers[i][0]) {
            var addItem = form.addMultipleChoiceItem();
            addItem.setTitle(soal[i][0])
                .setPoints(nilai[i][0]) //menentukan poin tiap pertanyaan 
                .setChoices([
                    addItem.createChoice(myShuffled[i][0]),
                    addItem.createChoice(myShuffled[i][1]),
                    addItem.createChoice(myShuffled[i][2], true),
                    addItem.createChoice(myShuffled[i][3]),
                    addItem.createChoice(myShuffled[i][4])
                ]);

        }

        else if (myShuffled[i][3] == myAnswers[i][0]) {
            var addItem = form.addMultipleChoiceItem();
            addItem.setTitle(soal[i][0])
                .setPoints(nilai[i][0]) //menentukan poin tiap pertanyaan 
                .setChoices([
                    addItem.createChoice(myShuffled[i][0]),
                    addItem.createChoice(myShuffled[i][1]),
                    addItem.createChoice(myShuffled[i][2]),
                    addItem.createChoice(myShuffled[i][3], true),
                    addItem.createChoice(myShuffled[i][4])
                ]);

        }

        else if (myShuffled[i][3] == myAnswers[i][0]) {
            var addItem = form.addMultipleChoiceItem();
            addItem.setTitle(soal[i][0])
                .setPoints(nilai[i][0]) //menentukan poin tiap pertanyaan 
                .setChoices([
                    addItem.createChoice(myShuffled[i][0]),
                    addItem.createChoice(myShuffled[i][1]),
                    addItem.createChoice(myShuffled[i][2]),
                    addItem.createChoice(myShuffled[i][3]),
                    addItem.createChoice(myShuffled[i][4], true)
                ]);

        }

    }

}



function shuffleEachRow(array) {

    var i, j, temp;

    for (i = array.length - 1; i > 0; i--) {

        j = Math.floor(Math.random() * (i + 1));

        temp = array[i];

        array[i] = array[j];

        array[j] = temp;

    }

    return array;

}