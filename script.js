const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// console.log(breathTime, holdTime);
breathAnimation();

function breathAnimation() {
    console.log('Breath In!');

    setTimeout(() => {
        console.log('Hold');

        setTimeout(() =>{
            console.log('Breathe Out!');
        },holdTime);

    }, breathTime);

    
}