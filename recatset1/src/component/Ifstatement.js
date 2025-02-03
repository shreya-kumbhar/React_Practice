import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function coinToss() {
    return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
    kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

if(coinToss() === "heads") {
    img = <imgage src={pics.kitty} />
} else {
    img = <imgage src={pics.doggy} />
}
root.render(img);