const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// console.log(breathTime, holdTime);
breathAnimation();

function breathAnimation() {
    console.log('Breath In!');
    text.innerText = 'Breath In!';
    container.className = 'container grow';

    setTimeout(() => {
        console.log('Hold');
        text.innerText = 'Hold';

        setTimeout(() =>{
            console.log('Breathe Out!');
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        },holdTime);

    }, breathTime);
}

setInterval(breathAnimation, totalTime);