'use strict';

//----------Global Variables--------------------------------------------------------------------------------------

var storeHours =['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var totalStores = []; //total number of stores in existence
var sendtoTable = document.getElementById('table-content'); //sends table info to html
// var sendtoLocation = document.getElementById('location');
//----------Store Constructor--------------------------------------------------------------------------------------

function Store(name, min, max, avg) { // new store builder
  this.name = name; // user input store name
  this.min = min; // user input min customers
  this.max = max; // user input max customers
  this.avg = avg; // user input cookies purchased per customer

  this.cookiesperHour = []; // single stores cookies sold per hour
  this.storeDailyTotal = 0; // single store's daily total cookies sold

  totalStores.push(this); //every time a new store is created add that instance to the total stores array
  purgeFooter();
  this.rowData(); //every time a new store is created add a new row in the html table that shows cookies per hour and store daily total
  makeFooter(); //runs footer function
}

//----------Random Number Generator-----------------------------------------------------------------------------
//----------Creates a random number using a defined max and min value-------------
function getRandomInteger (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min+1)) + min;
}

//----------Calculates Cookies Per Hour and Daily Total Per Store----------------------------------------------------------------------------
Store.prototype.cookiesperhourperday = function() { // when .storecookiesperhour-per day is called it will add new stores sold per hour data to cookiesperHour array and will add dailyTotal cookies sold per store.
  for (var i = 0; i < storeHours.length; i++) { // will run once for every hour the store is open
    var randomCustomer = getRandomInteger(this.min, this.max); //creates random customer value based off of indiv. store info.
    var customerCookie = parseInt(randomCustomer * this.avg); //multiplies random customer value with average cookie sales per customer.
    this.cookiesperHour.push(customerCookie); // adds cookies purchased per hour at a single store to cookiesperHour array
    this.storeDailyTotal += customerCookie; // sum of all cookies purchased at a single store in a day added to storeDailyTotal
  }
};

//----------Creates Header--------------------------------------------------------------------------------------------
function makeHeader (){ // When called it will create a header displaying store hours.
  var header = document.getElementById('table-content'); // when makeHeader is called send info to html table location
  var trEl = document.createElement('tr'); // when trEl is called create a new html row
  var tdStoreNameEl = document.createElement('td'); //creates a blank cell at the beginning of the header row when called
  tdStoreNameEl.textContent = 'Store Name'; //adds text Store Name to blank cell when called
  trEl.appendChild(tdStoreNameEl); //adds Store Name to first cell in header row
  for (var i in storeHours) { //runs for every hour the store is open
    var thEl = document.createElement('th'); // when called will add header element to table
    thEl.textContent = storeHours[i]; //adds text of storeHours array as for loop runs
    trEl.appendChild(thEl); //creates a blank cell which is a header
    header.appendChild(trEl); //adds tags to html when called
  }
  var tdTotalEl = document.createElement('td'); //creates a blank cell at the end of the header row when called
  tdTotalEl.textContent = 'Total'; //adds text Total to blank cell when called
  trEl.appendChild(tdTotalEl); //adds Total to last cell in header row
}
makeHeader(); // Calls Header to html

//----------Creates Row Per Constructor Instance --------------------------------------------------------------------------------------------
Store.prototype.rowData = function() { //everytime a new store is created create a new row with cookies per hour and daily total at at that instance data
  this.cookiesperhourperday(); // runs cookiesperHour and storeDailyTotal to populate data cells
  var trDataEl = document.createElement('tr'); //creates a row for cookiesperHour and storeDailyTotal to populate
  var tdNameEl = document.createElement('td'); //creates a blank cell for name to populate
  tdNameEl.textContent = this.name; //adds name from current store instance to blank cell
  trDataEl.appendChild(tdNameEl); //adds name to first cell in row

  for (var i in this.cookiesperHour) {
    var tdCookiesperHourEl = document.createElement('td'); //creates a blank cell for cookiesperHour to populate
    tdCookiesperHourEl.textContent = this.cookiesperHour[i]; //adds cookiesperHour array data to each new blank cell created
    trDataEl.appendChild(tdCookiesperHourEl); //adds populated cookiesperHour data to row
  }

  var tdstoreDailyTotalEl = document.createElement('td'); //creates a blank cell for storeDailyTotal data
  tdstoreDailyTotalEl.textContent = this.storeDailyTotal; //adds storeDailyTotal to blank cell
  trDataEl.appendChild(tdstoreDailyTotalEl); //adds store daily total cell to table

  sendtoTable.appendChild(trDataEl); //adds cookiesperHour cells and daily total cell to html
};

//----------Creates A Footer Showing Total Cookies Sold at Every Hour at ALL locations---------------------------------------------
function makeFooter() {
  var trTotalCumulativeEl = document.createElement('tr'); //creates a row for the footer
  trTotalCumulativeEl.id = 'footer-row'; //gives footer row html id='footer-row'

  var tdTotalsEl = document.createElement('td'); //creates a blank cell at beginning for footer row
  tdTotalsEl.textContent = 'Totals'; //Adds text Totals to blank cell
  trTotalCumulativeEl.appendChild(tdTotalsEl); //Adds Cell with text Totals to first cell of footer row.

  //----------Total Cookies Sold Per Hour Cumulative-----------------------
  var overallTotal = 0; //Variable that collects total of all cookies sold at all shops
  for (var i = 0; i < storeHours.length; i++) { //runs a loop that repeats at every hour the store is open
    var cumulativeHourlyTotal = 0; //collects values of all shops cookies per hour.

    for (var j = 0; j < totalStores.length; j++) {//runs a loop that repeats per instance of the store
      cumulativeHourlyTotal += totalStores[j].cookiesperHour[i]; //looks at the total instances of the store and everytime it finds and instance it adds that specific times amount of cookies
    }
    var tdFooterDataEl = document.createElement('td'); //creates a blank cell in the footer row for every hour the store is open
    tdFooterDataEl.textContent = cumulativeHourlyTotal; //Adds that value of the cumulative hourly total and adds it to every blank cell being created
    trTotalCumulativeEl.appendChild(tdFooterDataEl);
    overallTotal += cumulativeHourlyTotal; //Adds the hourly totals together into an overall day total
  }
  var tdOverallTotalEl = document.createElement('td'); //creates a blank cell at the end of the footer
  tdOverallTotalEl.textContent = overallTotal; //adds text from overallTotal to blank cell
  trTotalCumulativeEl.appendChild(tdOverallTotalEl); //adds overallTotal cell to footer row

  sendtoTable.appendChild(trTotalCumulativeEl); //adds footer to HTML
}

//----------Purges Footer----------------------------------------------------------------------------------------
function purgeFooter() { //when this function runs the footer is removed from the html
  var footerRow = document.getElementById('footer-row'); // the variable looks for the html ID = 'footer-row'
  if (footerRow) { //if exists then do
    footerRow.remove(); //removes the element with the html id footer-row
  }
}
//----------New Store Event (sales.html)------------------------------------------------------------------------------

var formEl = document.getElementById('main-form'); // looks for the html id main-form
formEl.addEventListener('submit', function(event) { //when submit is clicked run event this is below
  event.preventDefault();

  var name = event.target.name.value; //name of input boxes
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;
  
  if ((name === '') || (min === '') || (max === '') || (avg === '' )) {
    alert('no input detected');
  } else {
    new Store(name, min, max, avg); //where to put the input data
  }
  

});

//----------Existing Store Locations Database----------------------------------------------------------------------------

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 2.3);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 16, 4.6);

// //----------Store Location Names-----------------------------------------------------------------------------------
// function makeLocations() {
//   var ulStoreLocationEl = document.createElement('ul'); //creates an unordered list
//   for (var i = 0; i < totalStores.length; i++) {
//     var liStoreLocationEl = document.createElement('li'); //creates a list item
//     liStoreLocationEl.textContent = this.name[i];
//     ulStoreLocationEl.appendChild(liStoreLocationEl);
//   }
//   sendtoLocation.appendChild(ulStoreLocationEl);

// }

// makeLocations();