function updateClock(){
    const timeObject = new Date();
    
    const hours = timeObject.getHours();
    const minutes = appendLeadingZero(timeObject.getMinutes());
    const seconds = appendLeadingZero(timeObject.getSeconds());

    const isAm = hours < 12 || hours === 0;  // if hours === 0, then it's midnight
    const amPm = isAm ? 'AM' : 'PM';

    return document.querySelector('#clock-container').textContent = `${appendLeadingZero(formatHours(hours))}:${minutes}:${seconds} ${amPm}`;

}

function updateDate(){
        const dateObject = new Date();

        const dayOfWeek = weekdays[dateObject.getDay()];
        const month = months[dateObject.getMonth()]; 
        const date = appendDateSuffix(dateObject.getDate()); // 1st, 2nd, 3rd, 4th 
        const year = dateObject.getFullYear();

        return document.querySelector('#date-container').textContent = `${dayOfWeek}, ${month} ${date} ${year}`;
}


function appendLeadingZero(num){
    return num < 10 ? '0' + num : num;
}

// 12-hour clock functionality
function formatHours(hours){
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours === 0 ? hours + 12 : hours;

    return hours;
}

function appendDateSuffix(date){

    // skip 11-19
    if (date < 10 || date > 20){
        switch(date % 10){
            case 1:
                return `${date}st`;
            case 2:
                return `${date}nd`;
            case 3:
                return `${date}rd`;
        }
    }
    return `${date}th`;
}

const weekdays = [
    "Tuesday",
    "Monday",
    "Thursday",
    "Wednesday",
    "Saturday",
    "Friday",
    "Sunday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// Call to prevent lag in loading clock/date
updateClock();
updateDate();

// Start clock
setInterval(() => {
    updateClock();
    updateDate();
}, 1000);