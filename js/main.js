
var INTERVAL = 1000;
var passedMilliSeconds = 0;
var status = 0; // 0 = STOPPED, 1 = STARTED, 2 = PAUSED


function start() {
    status = 0;
    passedMilliSeconds = 0;
    setTimeout(run, 1000);
}

function pause() {
    if(status === 1) {
        status = 2;
    }
}

function cont() {
    if(status === 2) {
        run();
    }
}

function run() {
    status = 1;
    setTimeout(timer, 10);
}

function timer() {
    if(status === 1) {
        passedMilliSeconds += INTERVAL;
        var time = msToTime(passedMilliSeconds);
        document.getElementById('t').innerHTML = time;
        setTimeout(timer, INTERVAL);
    }
}

function msToTime(s) {

  ////////////////////////////////
  //Source: http://stackoverflow.com/questions/9763441/milliseconds-to-time-in-javascript
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  ////////////////////////////////
  
  secs = secs < 10 ? ("0" + secs) : secs;
  mins = mins < 10 ? ("0" + mins) : mins;

  return mins + ':' + secs;
}

setInterval(function() {
    var timer = document.getElementById('t');
    var x = window.innerWidth;
    var y = window.innerHeight;
    timer.style.fontSize = (x > y ? x / 10 : y / 10) + "px";
}, 100);