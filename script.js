const title = document.querySelector('#main_heading');
title.style.color = 'green';
console.log(title);
//const listItems = document.querySelectorAll('.list-item');
const btn = document.getElementById('btn');
btn.style.background = 'orange'
btn.style.color = 'white';

const items = document.getElementsByTagName('li');
const betterItems = [...items];
betterItems.forEach(function(item){
    console.log(item);
})
