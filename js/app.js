'use strict';
//----------Global Variables--------------------------------------------------------------------------------------

var tblEl;
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var totalLocations = [];
var totallocationsHour=[];
var cookieBusiness = document.getElementById('table-content');
var cookieForm = document.getElementById('main-form');
//----------Store Constructor--------------------------------------------------------------------------------------

function StoreConstructor(storeName, minCust, maxCust, avgcookiesperCust) {

  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgcookiesperCust = avgcookiesperCust;
  this.custperHour = [];
  this.customers();
  this. soldperHour = [];
  this.cookies();
  this.totalcookiesSold= [];
  this.total();
  totalLocations.push(this);

}
//----------Random Number Generator-----------------------------------------------------------------------------

StoreConstructor.prototype.customers = function(){
  for (var i = 0; i < storeHours.length; i++ ){
    this.custperHour.push(Math.round(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
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
//----------Calculates Cumulative Value of Cookies Sold at All Locations Per Hour-------------------------------------
var cumulativetotalperHour = function (){
  for (var r = 0; r < storeHours.length; r++) {

    var hourlyTotal = 0;
    for (var i = 0; i < totalLocations.length; i++){

      hourlyTotal += totalLocations[i].soldperHour[r];
    }
    totallocationsHour.push(hourlyTotal);
    console.log('-------------');
  }
  console.log(totallocationsHour);

};


var allCookies = function(){
  var cookiesForAll = 0;
  for (var i = 0; i < totallocationsHour.length ; i++){

    cookiesForAll += totallocationsHour[i];
  }

  return cookiesForAll;
};
//---------- Cookie Table Methods--------------------------------------------------------------------------------------

//----------Creates a Row for Cookie Table-----------------------------------------------------
StoreConstructor.prototype.renderRow = function() {
  this.calcSales();


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



//----------Creates a Header for Cookie Table-------------------------------------------------------------

// StoreConstructor.renderHeader = function(){
//   var trHeaderEl = document.createElement('tr');
//   cookieBusiness.appendChild(trHeaderEl);
//   var theBlankEl = document.createElement('th');
//   trHeaderEl.appendChild(theBlankEl);
//   for(var i = 0; i < storeHours.length; i++) {
//     var thEl = document.createElement('th');
//     thEl.textContent = storeHours[i];
//     trHeaderEl.appendChild(thEl);
//   }
//   var thTotalEl = document.createElement('th');
//   thTotalEl.textContent = 'total';
//   trHeaderEl.appendChild(thTotalEl);
// };


// //----------Creates a Footer for Cookie Table-------------------------------------------------------------


// StoreConstructor.renderFooter = function (){
//   var trFooterEl = document.createElement('tr');

//   var totalsNameOnBar = document.createElement('th');
//   totalsNameOnBar.textContent = 'Totals';
//   trFooterEl.appendChild(totalsNameOnBar);

//   for (var i = 0; i < storeHours.length; i++){
//     var totalElement = document.createElement('td');
//     totalElement.textContent = totallocationsHour[i];
//     trFooterEl.appendChild(totalElement);
//   }

//   var theFooter = document.createElement('td');
//   theFooter.textContent = allCookies();
//   trFooterEl.appendChild(theFooter);


//   cookieBusiness.appendChild(trFooterEl);

// };


//----------Adds cookie data to table rows--------------------------------------------------------
StoreConstructor.rendertotalLocations = function() {
  for(var i = 0; i < totalLocations.length; i++) {
    totalLocations[i].renderRow();
  }
};
//----------New Store Event (sales.html)-------------------------------------------------------------
StoreConstructor.addNewStoreConstructor = function(event) {
  event.preventDefault();
  var newstoreName = event.target.newstoreName.value;
  var newminCust = parseInt(event.target.newminCust.value);
  var newmaxCust = parseInt(event.target.newmaxCust.value);
  var newavgcookiesperCust = parseInt (event.target.newavgcookiesperCust.value);
  totallocationsHour = [];
  new StoreConstructor(newstoreName, newminCust, newmaxCust, newavgcookiesperCust);
  cookieBusiness.textContent = '';
  StoreConstructor.renderHeader();
  StoreConstructor.rendertotalLocations();
  cumulativetotalperHour();
  allCookies();
  StoreConstructor.renderFooter();
};
//----------Submit Button Event------------------------------------------------------------------------
cookieForm.addEventListener('submit', StoreConstructor.addNewStoreConstructor);

//----------Active Functions---------------------------------------------------------------------------

StoreConstructor.renderHeader();
StoreConstructor.rendertotalLocations();
cumulativetotalperHour();
allCookies();
StoreConstructor.renderFooter();



//----------Store Locations Database-------------------------------------------------------------------------------------

var pike = new StoreConstructor('1st and Pike', 23, 65, 6.3);
var seaTac = new StoreConstructor('SeaTac Airport', 3, 24, 1.2);
var seaC = new StoreConstructor ('Seattle Center', 11, 38, 2.3);
var capHill = new StoreConstructor ('Capitol Hill', 20, 38, 2.3);
var alki = new StoreConstructor ('Alki', 2, 16, 4.6);

