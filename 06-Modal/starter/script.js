'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
document.addEventListener('click', function (e) {
  if (e.target.className === 'show-modal') {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  } else if (
    (!modal.contains(event.target) || e.target.className === 'close-modal') &&
    !modal.classList.contains('hidden')
  ) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
