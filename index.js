const nextBtnEl = document.querySelector('.next');
const prevBtnEl = document.querySelector('.prev');

const clickNextHandler = () => {
   let itemsEl = document.querySelectorAll('.item');
   document.querySelector('.slide').appendChild(itemsEl[0]);
}

const clickPrevHandler = () => {
   let itemsEl = document.querySelectorAll('.item');
   document.querySelector('.slide').prepend(itemsEl[itemsEl.length - 1]);

}

nextBtnEl.addEventListener('click', clickNextHandler);
prevBtnEl.addEventListener('click', clickPrevHandler);