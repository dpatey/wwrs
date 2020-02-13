var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1hu6nw3tjuuKKdvpmQHjx6_UNZuV4xyRQPbFkycgIBco/edit?usp=sharing';
var sheetData = [];

function init() {
  Tabletop.init({ key: publicSpreadsheetUrl, callback: setData, simpleSheet: true });
  document.getElementById("regenerate").addEventListener("click", updateQuote);
}

function setData(data, tabletop) {
  sheetData = data;
  updateQuote();
}

function updateQuote() {
  var index = Math.floor((Math.random() * sheetData.length));
  var quote = sheetData[index].quote;
  document.getElementById("quote").innerHTML = quote;
}

window.addEventListener('DOMContentLoaded', init)