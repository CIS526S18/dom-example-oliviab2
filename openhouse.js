"use strict;"

const MS_IN_SEC = 1000;
const MS_IN_MIN = 60 * MS_IN_SEC;
const MS_IN_HOUR = 60 * MS_IN_MIN;
const MS_IN_DAY = 24 * MS_IN_HOUR;

function createCountdown(elementId, startTime) {
    var clock = document.createElement(elementId);
    function setTime(){

        var time = startTime - Date.now();
        var days = Math.floor(time / MS_IN_DAY);
        time -= days * MS_IN_DAY;
        var hours = Math.floor(time / MS_IN_HOUR);
        time -= hours * MS_IN_HOUR;
        var minutes = Math.floor(time / MS_IN_MIN);
        time -= hours * MS_IN_MIN;
        var seconds = Math.floor(time / MS_IN_SEC);
        time -= hours * MS_IN_SEC;

        clock.innerHTML = `In ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }

    setInterval(setTime, 1000);

    document.getElementById(elementId).appendChild(clock);
}

createCountdown('all-university', Date.parse('2018-4-7'));
createCountdown('engineering', Date.parse('2018-4-6'));