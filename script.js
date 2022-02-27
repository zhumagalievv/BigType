$(document).ready(function () {

    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {

        $('.animated-icon3').toggleClass('open');
    });
});

let launchDate = new Date("Feb 28, 2022 20:19:00").getTime();

let timer = setInterval(tick, 1000);

function tick () {
    let now = new Date().getTime();
    let t = launchDate - now;
    if (t > 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        if (days < 10) { days = "0" + days; }
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours; }
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { mins = "0" + mins; }
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) { secs = "0" + secs; }
        let time = `${days} : ${hours} : ${mins} : ${secs}`;
        document.querySelector('.countdown').innerText = time;
    }
}