function clock() {

    let date = new Date();

    let hr = date.getHours();
    if (hr < 10) {
        hr = "0" + hr;
    };

    let min = date.getMinutes();
    if (min < 10) {
        min = "0" + min;
    };

    let sec = date.getSeconds();
    if (sec < 10) {
        sec = "0" + sec;
    };

    let currentHour = hr + ":" + min + ":" + sec;
    
    let display = document.getElementById("clock");
    display.innerHTML = currentHour;
}

setInterval (clock, 1000);