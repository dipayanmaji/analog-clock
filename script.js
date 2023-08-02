const hr = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    /*
        second
        60sec = 360deg
        S sec = 6*S deg

        minute
        60min = 360deg
        M min = 6*M deg

        hour
        12hr = 360deg
        1hr = 30deg
        H hr = 30*H deg
        &
        1hr or 60 min = 30deg
        M min = M/2 deg

        so, hour rotation = 30*H + M/2 deg
    */

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

// for 1st time render
displayTime();

setInterval(displayTime, 1000);