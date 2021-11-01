//Assign days of the week to 0-6 values returned by dayOfWeek() method
var weekdays = new Array(7);
weekdays[0] = "Monday";
weekdays[1] = "Tuesday";
weekdays[2] = "Wednesday";
weekdays[3] = "Thursday";
weekdays[4] = "Friday";
weekdays[5] = "Saturday";
weekdays[6] = "Sunday";

//Assign months to 0-11 values returned by getMonth() method
var months = new Array(12);
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

// create time h1 and date h2
var timeElement = document.createElement('h1');
var dateElement = document.createElement('h2');

// Want: Friday, August 31st 2021

// Start the clock
function startClock(){
    setInterval(updateClock, 1000); // call every seconds
}

// Update time every second
function updateClock(){
    
    console.log("working!");

    // Create new date object each time 
    let theDate = new Date();
    
    // grab current time properties for new date obj
    var hours = theDate.getHours();
    var minutes = theDate.getMinutes();
    var seconds = theDate.getSeconds();
    
    var dayOfWeek = weekdays[theDate.getDay()]; // Mon, Tues, Wed, etc.
    var month = months[theDate.getMonth()]; // Jan, Feb, March, etc.
    var day = theDate.getDate(); // 21st, 22nd, 23rd etc.
    var year = theDate.getFullYear();


    // Reference to clock and date divs
    var clock = document.querySelector('#clock');
    var date = document.querySelector('#date');
    

    // Set time text
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;

    // Set date text
    dateElement.textContent = `${dayOfWeek}, ${month} ${day} ${year}`;

    // Append updated timeElement & dateElement to clock and date divs
    clock.appendChild(timeElement);
    date.appendChild(dateElement);
}

// Call Clock function
startClock();
