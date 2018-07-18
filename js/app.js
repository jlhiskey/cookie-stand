'use strict';
//----------Global Variables--------------------------------------------------------------------------------------

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var totalLocations = [];

//----------Global Prototype Methods-----------------------------------------------------------------------------------------

//----------Calculates Cookies Per Hour----------------------------------------------------------------------------

StoreConstructor.prototype.cookiesperHour = function () {
  var avgcookiesCalc = 0;
  for (var i = 0; i < this.storeHours.length; i++) {
    avgcookiesCalc = Math.ceil(this.custperHour[i] * this.avgcookiesperCust);
    this.soldperHour.push(avgcookiesCalc);
  }
};
//----------Calculates Random Customers Per Hour------------------------------------------------------------------

StoreConstructor.prototype.randcustperHour = function () {
  for (var i = 0; i < this.storeHours.length; i++) {
    var custperhourInt = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    custperhourInt = Math.round(custperhourInt);
    this.custperHour.push(custperhourInt);
  }
};

//----------Calculates Cookies Per Day---------------------------------------------------------------------------------

StoreConstructor.prototype.totalcookiesSold= function () {
  var cookiesSoldCalc = 0;
  for (var i = 0; i < this.storeHours.length; i++) {
    cookiesSoldCalc += this.soldperHour[i];
  }
  this.totalcookiesSold = cookiesSoldCalc;
};

//----------Store Constructor--------------------------------------------------------------------------------------



function StoreConstructor(storeName, htmlID, storeHours, minCust, maxCust, avgcookiesperCust) {

  this.storeName = storeName;
  this.htmlID = htmlID;
  this.storeHours = storeHours;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgcookiesperCust = avgcookiesperCust;
  this.custperHour = [];
  this. soldperHour = [];
  this.totalcookiesSold= 0;
  totalLocations.push(this);
}
//----------Store Locations Database-------------------------------------------------------------------------------------

function makestoreLocations() {
  new StoreConstructor('First Ave and Pike St', 'first-pike', storeHours, 23, 65, 6.3);
  new StoreConstructor('SeaTac Airport', 'sea-tac', storeHours, 3, 24, 1.2);
  new StoreConstructor('Seattle Center', 'sea-center', storeHours, 11, 38, 3.7);
  new StoreConstructor('Capitol Hill', 'capitol-hill', storeHours, 20, 38, 2.3);
  new StoreConstructor('Alki Beach', 'alki-beach', storeHours, 2, 16, 4.6);
}

makestoreLocations();

//---------- Cookie Table Functions--------------------------------------------------------------------------------------

//---------- Loops for seeding the cookies tables------------------------------------------------------------------------
for(var k = 0; k < totalLocations.length; k++){
  totalLocations[k].randcustperHour();
}
for(k = 0; k < totalLocations.length; k++){
  totalLocations[k].cookiesperHour();
}
//---------- Creates a Header for Cookies
function makeHeaderRow() {
  var storelocations = document.getElementById('storelocations');
  var trEl = document.createElement('tr');
  storelocations.appendChild(trEl);
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for(var j = 0; j < storeHours.length; j++){
    console.log(storeHours[j]);
    var newtext = document.createTextNode(storeHours[j]);
    thEl = document.createElement('th');
    thEl.appendChild(newtext);
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Location Total';
  trEl.appendChild(thEl);
}

//--------- Runs Header function for Cookies--------------------------------------------------------------------------------

makeHeaderRow();

//---------- Creates a Table with Cookie Data-------------------------------------------------------------------------------

function makeTableRows() {
  var storelocations = document.getElementById('storelocations');
  for(var k = 0; k < totalLocations.length; k++){
    var trEl = document.createElement('tr');
    storelocations.appendChild(trEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = totalLocations[k].storeName;
    trEl.appendChild(tdEl);
    for(var m = 0; m < totalLocations[k].soldperHour.length; m++){
      var tdElement = document.createElement('td');
      tdElement.textContent = totalLocations[k].soldperHour[m];
      trEl.appendChild(tdElement);
    }
    var sum = totalLocations[k].soldperHour.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    console.log(sum);
    tdEl = document.createElement('td');
    tdEl.textContent = sum;
    trEl.appendChild(tdEl);
  }
}

//----------Runs Table data function for Cookies-----------------------------------------------------------------------------

makeTableRows();