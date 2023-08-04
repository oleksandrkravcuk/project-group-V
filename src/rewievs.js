const dotOne = document.querySelector('.reweivs-buut-cont-one');
const dotTwo = document.querySelector('.reweivs-buut-cont-two');
const dotThree = document.querySelector('.reweivs-buut-cont-sry');


dotOne.addEventListener('click', () => {
  dotOne.classList.add('active');
  dotTwo.classList.remove('active');
  dotThree.classList.remove('active');
});

dotTwo.addEventListener('click', () => {
  dotOne.classList.remove('active');
  dotTwo.classList.add('active');
  dotThree.classList.remove('active');
});

dotThree.addEventListener('click', () => {
  dotOne.classList.remove('active');
  dotTwo.classList.remove('active');
  dotThree.classList.add('active');
});