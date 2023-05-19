const img = document.createElement('img');

const randomImg = Math.floor(Math.random() * 9) + 1;

img.setAttribute('src', `img/${randomImg}.jpg`);

document.body.append(img);