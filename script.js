const leftButton = document.querySelector('.scroll-button.left');
const rightButton = document.querySelector('.scroll-button.right');
const banniere = document.querySelector('.banniere');

leftButton.addEventListener('click', () => {
  banniere.scrollBy({ left: -300, behavior: 'smooth' });
});

rightButton.addEventListener('click', () => {
  banniere.scrollBy({ left: 300, behavior: 'smooth' });
});

document.querySelector('.search-button').addEventListener('click', function() {
    const query = document.querySelector('.search-input').value;
    alert(`Vous avez recherché : ${query}`);
});
