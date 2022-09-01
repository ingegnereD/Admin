// 
const number = document.querySelector('#number')
let circle = document.querySelector('circle')
let counter = 0;
setInterval(job, 30)
let score = 65;

function job() {
    if (counter == score) {
        clearInterval;
    } else {
        counter += 1;
        // number.innerHTML = `${counter}%`
        number.innerHTML = scale(counter, 0, score, 1, score)
        document.documentElement.style.setProperty('--range', '225')
    }
}

// circle.style.strokeDashoffset = '405'



const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}