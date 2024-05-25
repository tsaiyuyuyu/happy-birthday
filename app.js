let number = 0
let images = [];
for(let i = 0; i < 6; i++) {
    images.push(`./img/img_outfit_${i+1}.png`);
}

async function getRandomImage() {
    const loopImages = setInterval(getImage, 100)
    await new Promise(res => setTimeout(res, 3000));
    clearInterval(loopImages)
}

function getImage() {
    getRandomNumber()
    return document.getElementById('result').innerHTML = '<img src="' + images[number]+'" />';
} 
function getRandomNumber() {
    let newNumber = Math.floor(Math.random()*images.length);
    while (newNumber == number) {
        newNumber = Math.floor(Math.random()*images.length);
    }
    number =  newNumber
}
