'use strict';
//----------Global Variables--------------------------------------------------------------------------------------

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//----------Store Locations--------------------------------------------------------------------------------------

//----------1st and Pike-----------------------------------------------------------------------------------------

var firstandPike = {
  minCust: 23,
  maxCust: 65,
  avgcookiesperCust: 6.3,
  custperHour: [],
  soldperHour: [],
  totalcookiesSold: 0,

  //----------Calculates Random Customers Per Hour------------------------------------------------------------------

  randcustperHour: function () {
    for (var i = 0; i < storeHours.length; i++) {
      var custperhourInt = Math.random() * (this.maxCust - this.minCust) + this.minCust;
      custperhourInt = Math.round(custperhourInt);
      this.custperHour.push(custperhourInt);
    }
  },

//----------Calculates Cookies Per Hour----------------------------------------------------------------------------

  cookiesperHour: function () {
    var avgcookiesCalc = 0;
    for (var i = 0; i < storeHours.length; i++) {
      avgcookiesCalc = Math.floor(this.custperHour[i] * this.avgcookiesperCust);
      this.soldperHour.push(avgcookiesCalc);
    }
  },

//----------Calculates Cookies Per Day---------------------------------------------------------------------------------

  totalcookiesSold: function () {
    var cookiesSoldCalc = 0;
    for (var i = 0; i < storeHours.length; i++) {
      cookiesSoldCalc += this.soldperHour[i];
    }
    this.totalcookiesSold = cookiesSoldCalc;
  },

//----------Renders Cookies per hour on HTML------------------------------------------------------------------------

  showSales: function () {

    var ulElem = document.getElementById('first-pike');
    for (var i = 0; i < storeHours.length; i++) {
      var listItemElem = document.createElement('li');
      listItemElem.innerHTML = storeHours[i] + ':<br> ' + this.soldperHour[i] + ' cookies';
      ulElem.appendChild(listItemElem);
    }
  }
};

//----------Renders Total Cookies per hour on HTML-----------------------------------------------------------------

var ulElem = document.getElementById('first-pike');
var listItemElem = document.createElement('li');
listItemElem.textContent = 'Total: ' + firstandPike.totalcookiesSold;
ulElem.appendChild(listItemElem);

//----------Merges All Functions to Shows on HTML------------------------------------------------------------------

function callFirstPike() {
  firstandPike.randcustperHour();
  firstandPike.cookiesperHour();
  firstandPike.totalcookiesSold();
  firstandPike.showSales();
}

//----------Calls Functions to Render on HTML---------------------------------------------------------------------

callFirstPike();



