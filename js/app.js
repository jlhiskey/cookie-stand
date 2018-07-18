'use strict';
//----------Global Variables--------------------------------------------------------------------------------------

var tblEl;
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var totalLocations = [];
//----------Store Constructor--------------------------------------------------------------------------------------

function StoreConstructor(storeName, minCust, maxCust, avgcookiesperCust) {

  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgcookiesperCust = avgcookiesperCust;
  this.custperHour = [];
  this. soldperHour = [];
  this.totalcookiesSold= 0;
  totalLocations.push(this);
}
//----------Random Number Generator-----------------------------------------------------------------------------

StoreConstructor.prototype.generateRandom = function() {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
};
//----------Calculates Random Customers Per Hour------------------------------------------------------------------

StoreConstructor.prototype.randcustperHour = function () {
  for (var i = 0; i < storeHours.length; i++) {
    var randomValue = this.generateRandom();
    this.custperHour.push(randomValue);
  }
};
//----------Calculates Cookies Per Hour and Total Cookies Sold----------------------------------------------------------------------------

StoreConstructor.prototype.calcSales = function () {
  this.randcustperHour();

  for (var numCustomers of this.custperHour) {
    var cookies = Math.ceil(this.avgcookiesperCust * numCustomers);
    this.soldperHour.push(cookies);
    this.totalcookiesSold += cookies;
  }
};
//---------- Cookie Table Methods--------------------------------------------------------------------------------------

StoreConstructor.prototype.render = function() {
  this.calcSales();
  //----------Creates a Row for Cookie Table-----------------------------------------------------

  var trStoreEl = document.createElement('tr');
  var tdNameEl = document.createElement('td');
  tdNameEl.textContent = this.storeName;
  trStoreEl.appendChild(tdNameEl);

  for (var idx in storeHours) {
    var tdDataEl = document.createElement('td');
    tdDataEl.textContent = this.soldperHour[idx];
    trStoreEl.appendChild(tdDataEl);
  }

  var tdTotalEl = document.createElement('td');
  tdTotalEl.textContent = this.totalcookiesSold;
  trStoreEl.appendChild(tdTotalEl);

  tblEl.appendChild(trStoreEl);
};

function createTable() {
//----------Creates a Header for Cookie Table-------------------------------------------------------------

  tblEl = document.createElement('table');
  var trHeaderEl = document.createElement('tr');
  var thBlankEl = document.createElement('th');
  thBlankEl.textContent = 'Store Name';
  trHeaderEl.appendChild(thBlankEl);

  for (var idx = 0; idx < storeHours.length; idx++) {
    var thEl = document.createElement('th');
    thEl.textContent = storeHours[idx];
    trHeaderEl.appendChild(thEl);
  }

  var thTotalEl = document.createElement('th');
  thTotalEl.textContent = 'Daily Total';
  trHeaderEl.appendChild(thTotalEl);

  tblEl.appendChild(trHeaderEl);

  document.getElementById('table-content').appendChild(tblEl);
}
//----------Store Locations Database-------------------------------------------------------------------------------------

new StoreConstructor('First Ave and Pike St', 23, 65, 6.3);
new StoreConstructor('SeaTac Airport', 3, 24, 1.2);
new StoreConstructor('Seattle Center', 11, 38, 3.7);
new StoreConstructor('Capitol Hill', 20, 38, 2.3);
new StoreConstructor('Alki Beach', 2, 16, 4.6);

//-----------Calls Table--------------------------------------------------------------------------------------------
createTable();

for (var i = 0; i < totalLocations.length; i++) {
  totalLocations[i].render();
}