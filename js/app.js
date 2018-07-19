'use strict';

//----------Global Variables--------------------------------------------------------------------------------------

var storeHours =['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var totalLocations=[];
var totallocationsHour=[];
var salesTable = document.getElementById('table-content');

//----------Store Constructor--------------------------------------------------------------------------------------

function StoreConstructor(storeName,minCust,maxCust,avgcookiesperCust) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgcookiesperCust = avgcookiesperCust;
  this.custperHour = [];
  this.customers();
  this.soldperHour = [];
  this.cookies();
  this.totalcookiesSold = [];
  this.total();
  totalLocations.push(this);
}

//----------Random Customer Generator-----------------------------------------------------------------------------

StoreConstructor.prototype.customers = function(){
  for (var i = 0; i < storeHours.length; i++ ){
    this.custperHour.push(Math.round(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
  }
};

//----------Calculates Cookies Per Hour----------------------------------------------------------------------------

StoreConstructor.prototype.cookies = function() {
  for (var i = 0; i < storeHours.length; i++){
    this.soldperHour.push(Math.round(this.custperHour[i] * this.avgcookiesperCust));
  }
};

//----------Calculates Total Cookies Sold at One Store--------------------------------------------------------------

StoreConstructor.prototype.total = function(){
  var cookieAmount = 0;
  for (var i=0; i < this.soldperHour.length; i++ ){
    cookieAmount += this.soldperHour[i];
  }
  return this.totalcookiesSold.push(cookieAmount);
};

//----------Calculates Total Cookies Sold at All Stores Combined----------------------------------------------------

var eachLocationstotalcookiesSold = function (){
  for (var r = 0; r < storeHours.length; r++) {

    var hourlyTotal = 0;
    for (var i = 0; i < totalLocations.length; i++){

      hourlyTotal += totalLocations[i].soldperHour[r];
    }
    totallocationsHour.push(hourlyTotal);
  }
};

var everyOneOfThoseCookies = function(){
  var cookiesForAll = 0;
  for (var i = 0; i < totallocationsHour.length ; i++){

    cookiesForAll += totallocationsHour[i];
  }

  return cookiesForAll;
};

//----------Creates Table Footer and Header on sales.html------------------------------------------------------------------

//----------Creates Row----------------------------------------------------------

StoreConstructor.prototype.renderRow = function(){
  var trElement=document.createElement('tr');
  salesTable.appendChild(trElement);
  var tdElement=document.createElement('td');
  salesTable.appendChild(tdElement);
  var thElement=document.createElement('th');

  //----------Adds Store Names to Left Column-------------
  thElement.textContent = this.storeName;
  trElement.appendChild(thElement);

  //----------Adds Cookies Per Hour to Store Rows---------
  for (var i = 0; i < storeHours.length; i++){

    tdElement = document.createElement('td');
    tdElement.textContent = this.soldperHour[i];
    trElement.appendChild(tdElement);
  }
  //----------Adds Total Cookies Per Day Per Store to Right Column---
  tdElement = document.createElement('td');
  tdElement.textContent = this.totalcookiesSold;
  trElement.appendChild(tdElement);

  //----------Renders Data to DOM-----------------------
  salesTable.appendChild(trElement);
};

//----------Creates Header--------------------------------------------------------------------------------------------

StoreConstructor.renderHeader = function(){
  var headerRow = document.createElement('tr');
  salesTable.appendChild(headerRow);
  var noBox = document.createElement('th');
  headerRow.appendChild(noBox);
  for(var i = 0; i < storeHours.length; i++) {
    var timeElement = document.createElement('th');
    timeElement.textContent = storeHours[i];
    headerRow.appendChild(timeElement);
  }
  var totalBox = document.createElement('th');
  totalBox.textContent = 'total';
  headerRow.appendChild(totalBox);
};

//----------Creates Footer--------------------------------------------------------------------------------------------

StoreConstructor.renderFooter = function (){
  var footerRow = document.createElement('tr');

  var totalsNameOnBar = document.createElement('th');
  totalsNameOnBar.textContent = 'Totals';
  footerRow.appendChild(totalsNameOnBar);

  for (var i =0; i < storeHours.length; i++){
    var totalElement = document.createElement('td');
    totalElement.textContent = totallocationsHour[i];
    footerRow.appendChild(totalElement);
  }

  var theLastBox = document.createElement('td');
  theLastBox.textContent = everyOneOfThoseCookies();
  footerRow.appendChild(theLastBox);

  salesTable.appendChild(footerRow);
};

//----------Creates A Row Per Store Created Between the Header and Footer---------------------------------------------

StoreConstructor.rendertotalLocations = function() {
  for(var i = 0; i < totalLocations.length; i++) {
    totalLocations[i].renderRow();
  }
};

//----------New Store Event (sales.html)------------------------------------------------------------------------------
var addstoreForm = document.getElementById('main-form');
addstoreForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var storeName = event.target.storeName.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgcookiesperCust = event.target.avgcookiesperCust.value;

  new StoreConstructor(storeName, minCust, maxCust, avgcookiesperCust);
  console.log('storeName', storeName);
  console.log('Tester', event.target.storeName.value);
  console.log('Total Locations', totalLocations);
});

//----------Existing Store Locations Database----------------------------------------------------------------------------

new StoreConstructor('1st and Pike', 23, 65, 6.3);
new StoreConstructor('SeaTac Airport', 3, 24, 1.2);
new StoreConstructor ('Seattle Center', 11, 38, 2.3);
new StoreConstructor ('Capitol Hill', 20, 38, 2.3);
new StoreConstructor ('Alki', 2, 16, 4.6);


//----------Active Functions---------------------------------------------------------------------------------------------

StoreConstructor.renderHeader();
StoreConstructor.rendertotalLocations();
eachLocationstotalcookiesSold();
everyOneOfThoseCookies();
StoreConstructor.renderFooter();


