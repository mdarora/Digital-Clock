
const hour = document.getElementById(`hour`);
const min = document.getElementById(`min`);
const sec = document.getElementById(`sec`);
const ampm = document.querySelector(`small`);


function clock() {
    const d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ap;

    if (h > 12) {
        if (h == 0) {
            h = `00`;
            today();
        }
        else {
            h -= 12
        }
    }

    h = h < 10 ? `0${h}` : h;

    ap = h >= 12 ? `PM` : `AM`;

    m = m < 10 ? `0${m}` : m;

    s = s < 10 ? `0${s}` : s;


    hour.innerText = `${h} :`;
    min.innerText = `${m} :`;
    sec.innerText = `${s}`;
    ampm.innerText = `${ap}`;
}
setInterval(clock, 100);

function today() {
    const d = new Date();
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    const dateArea = document.getElementById(`today`);

    date = date < 10 ? date = `0${date}` : date;

    switch (day) {
        case 0:
            day = `Sunday`;
            break;
        case 1:
            day = `Monday`;
            break;
        case 2:
            day = `Tuesday`;
            break;
        case 3:
            day = `Wednesday`;
            break;
        case 4:
            day = `Thrusday`;
            break;
        case 5:
            day = `Friday`;
            break;
        case 6:
            day = `Saturday`;
            break;
    }
    switch (month) {
        case 0:
            month = `Jan`;
            break;
        case 1:
            month = `Feb`;
            break;
        case 2:
            month = `Mar`;
            break;
        case 3:
            month = `Apr`;
            break;
        case 4:
            month = `May`;
            break;
        case 5:
            month = `Jun`;
            break;
        case 6:
            month = `Jul`;
            break;
        case 7:
            month = `Aug`;
            break;
        case 8:
            month = `Sep`;
            break;
        case 9:
            month = `Oct`;
            break;
        case 10:
            month = `Nov`;
            break;
        case 11:
            month = `Dec`;
            break;
    }

    dateArea.innerText = `${day}, ${date} / ${month} / ${year}`

}
today();