const XLSX = require('xlsx');
let fs = require('fs');
let path = require('path');
let officegen = require('officegen');
let async = require ('async');

const {createTable} = require('./word/create.js');

let workbook = XLSX.readFile('test.xlsx');
let firstSheet = workbook.SheetNames[0];

let worksheet = workbook.Sheets[firstSheet];

let data = XLSX.utils.sheet_to_json(worksheet);

var docx = officegen ({
    type: 'docx',
    orientation: 'portrait'
});

docx.on ( 'error', function ( err ) {
    console.log ( err );
});

let table = createTable(data);

var pObj = docx.createP();

var tableStyle = {
	tableColWidth: 4261,
	tableSize: 24,
	tableColor: "ada",
	tableAlign: "left",
	tableFontFamily: "Comic Sans MS"
};

pObj = docx.createTable(table, tableStyle);

var out = fs.createWriteStream ('out.docx');
out.on ('error', function ( err ) {
    console.log (err);
});

//async create the file
async.parallel([
    function (done) {
        out.on ('close', function () {
            console.log ('Finish to create a DOCX file.');
            done (null);
        });
        docx.generate (out);
    }

], function (err) {
    if (err) {
        console.log ('error: ' + err);
    }
});


