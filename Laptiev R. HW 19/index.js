// const container = document.querySelector('#container');

const randomNumber = Math.floor(Math.random() * 9) + 1;

const img = document.createElement('img');

img.setAttribute('src', `img/${randomNumber}.jpg`);

document.body.append(img);