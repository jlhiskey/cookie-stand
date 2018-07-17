'use strict';
//----------Global Variables--------------------------------------------------------------------------------------

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
 
//----------Global Prototype Methods-----------------------------------------------------------------------------------------

 //----------Calculates Cookies Per Hour----------------------------------------------------------------------------

 storeConstructor.prototype.cookiesperHour = function () {
  var avgcookiesCalc = 0;
  for (var i = 0; i < this.storeHours.length; i++) {
    avgcookiesCalc = Math.ceil(this.custperHour[i] * this.avgcookiesperCust);
    this.soldperHour.push(avgcookiesCalc);
  }

//----------Calculates Random Customers Per Hour------------------------------------------------------------------

  storeConstructor.prototype.randcustperHour = function () {
    for (var i = 0; i < this.storeHours.length; i++) {
      var custperhourInt = Math.random() * (this.maxCust - this.minCust) + this.minCust;
      custperhourInt = Math.round(custperhourInt);
      this.custperHour.push(custperhourInt);
    }

//----------Calculates Random Customers Per Hour------------------------------------------------------------------

  storeConstructor.prototype.randcustperHour = function () {
    for (var i = 0; i < this.storeHours.length; i++) {
      var custperhourInt = Math.random() * (this.maxCust - this.minCust) + this.minCust;
      custperhourInt = Math.round(custperhourInt);
      this.custperHour.push(custperhourInt);
    }
    }; 

//----------Calculates Cookies Per Day---------------------------------------------------------------------------------

storeConstructor.prototype.totalcookiesSold= function () {
  var cookiesSoldCalc = 0;
  for (var i = 0; i < this.storeHours.length; i++) {
    cookiesSoldCalc += this.soldperHour[i];
    }
  this.totalcookiesSold = cookiesSoldCalc;
};

//----------Store Constructor--------------------------------------------------------------------------------------



function storeConstructor(storeName, htmlID, storeHours, minCust, maxCust, avgcookiesperCust) {

  this.storeName = storeName;
  this.htmlID = htmlID;
  this.storeHours = storeHours;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgcookiesperCust = avgcookiesperCust;
  this.custperHour = [],
  this. soldperHour = [],
  this.totalcookiesSold= 0,

 



    //----------Renders Cookies per hour on HTML------------------------------------------------------------------------

    this.showSales = function () {

      var ulElem = document.getElementById(this.htmlID);
      for (var i = 0; i < this.storeHours.length; i++) {
        var listItemElem = document.createElement('li');
        listItemElem.innerHTML = this.storeHours[i] + ':<br> ' + this.soldperHour[i] + ' cookies';
        ulElem.appendChild(listItemElem);
      }
    };
  };

  //----------Merges All Functions to Shows on HTML------------------------------------------------------------------

  function callFirstPike() {
    firstandPike.randcustperHour();
    firstandPike.cookiesperHour();
    firstandPike.totalcookiesSold();
    firstandPike.showSales();
  }

  //----------Calls Functions to Render on HTML---------------------------------------------------------------------

  callFirstPike();

  //----------Renders Total Cookies per hour on HTML-----------------------------------------------------------------

  var ulElem = document.getElementById('first-pike');
  var listItemElem = document.createElement('li');
  listItemElem.textContent = 'Total: ' + firstandPike.totalcookiesSold;
  ulElem.appendChild(listItemElem);
}


//----------1st and Pike-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------
//----------SeaTac Airport-----------------------------------------------------------------------------------------

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgcookiesperCust: 1.2,
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

    var ulElem = document.getElementById('sea-tac');
    for (var i = 0; i < storeHours.length; i++) {
      var listItemElem = document.createElement('li');
      listItemElem.innerHTML = storeHours[i] + ':<br> ' + this.soldperHour[i] + ' cookies';
      ulElem.appendChild(listItemElem);
    }
  }
};

//----------Merges All Functions to Shows on HTML------------------------------------------------------------------

function callseaTac() {
  seaTac.randcustperHour();
  seaTac.cookiesperHour();
  seaTac.totalcookiesSold();
  seaTac.showSales();
}

//----------Calls Functions to Render on HTML---------------------------------------------------------------------

callseaTac();

//----------Renders Total Cookies per hour on HTML-----------------------------------------------------------------

var ulElem = document.getElementById('sea-tac');
var listItemElem = document.createElement('li');
listItemElem.textContent = 'Total: ' + seaTac.totalcookiesSold;
ulElem.appendChild(listItemElem);

//-----------------------------------------------------------------------------------------------------------------
//----------Seattle Center-----------------------------------------------------------------------------------------

var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgcookiesperCust: 3.7,
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

    var ulElem = document.getElementById('sea-center');
    for (var i = 0; i < storeHours.length; i++) {
      var listItemElem = document.createElement('li');
      listItemElem.innerHTML = storeHours[i] + ':<br> ' + this.soldperHour[i] + ' cookies';
      ulElem.appendChild(listItemElem);
    }
  }
};

//----------Merges All Functions to Shows on HTML------------------------------------------------------------------

function callseaCenter() {
  seaCenter.randcustperHour();
  seaCenter.cookiesperHour();
  seaCenter.totalcookiesSold();
  seaCenter.showSales();
}

//----------Calls Functions to Render on HTML---------------------------------------------------------------------

callseaCenter();

//----------Renders Total Cookies per hour on HTML-----------------------------------------------------------------

var ulElem = document.getElementById('sea-center');
var listItemElem = document.createElement('li');
listItemElem.textContent = 'Total: ' + seaCenter.totalcookiesSold;
ulElem.appendChild(listItemElem);

//-----------------------------------------------------------------------------------------------------------------
//----------Capitol Hill-----------------------------------------------------------------------------------------

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgcookiesperCust: 2.3,
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

    var ulElem = document.getElementById('capitol-hill');
    for (var i = 0; i < storeHours.length; i++) {
      var listItemElem = document.createElement('li');
      listItemElem.innerHTML = storeHours[i] + ':<br> ' + this.soldperHour[i] + ' cookies';
      ulElem.appendChild(listItemElem);
    }
  }
};

//----------Merges All Functions to Shows on HTML------------------------------------------------------------------

function callcapHill() {
  capHill.randcustperHour();
  capHill.cookiesperHour();
  capHill.totalcookiesSold();
  capHill.showSales();
}

//----------Calls Functions to Render on HTML---------------------------------------------------------------------

callcapHill();

//----------Renders Total Cookies per hour on HTML-----------------------------------------------------------------

var ulElem = document.getElementById('capitol-hill');
var listItemElem = document.createElement('li');
listItemElem.textContent = 'Total: ' + capHill.totalcookiesSold;
ulElem.appendChild(listItemElem);

//-----------------------------------------------------------------------------------------------------------------
//----------Alki Beach-----------------------------------------------------------------------------------------

var alkiBeach = {
  minCust: 2,
  maxCust: 16,
  avgcookiesperCust: 4.6,
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

    var ulElem = document.getElementById('alki-beach');
    for (var i = 0; i < storeHours.length; i++) {
      var listItemElem = document.createElement('li');
      listItemElem.innerHTML = storeHours[i] + ':<br> ' + this.soldperHour[i] + ' cookies';
      ulElem.appendChild(listItemElem);
    }
  }
};

//----------Merges All Functions to Shows on HTML------------------------------------------------------------------

function callalkiBeach() {
  alkiBeach.randcustperHour();
  alkiBeach.cookiesperHour();
  alkiBeach.totalcookiesSold();
  alkiBeach.showSales();
}

//----------Calls Functions to Render on HTML---------------------------------------------------------------------

callalkiBeach();

//----------Renders Total Cookies per hour on HTML-----------------------------------------------------------------

var ulElem = document.getElementById('alki-beach');
var listItemElem = document.createElement('li');
listItemElem.textContent = 'Total: ' + alkiBeach.totalcookiesSold;
ulElem.appendChild(listItemElem);