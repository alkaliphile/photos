let modal = document.getElementById('modal');
let closeButton = document.getElementById('close');
let max = document.getElementsByClassName('maximize');
let imgLoader = document.getElementById('imgLoader');

let tabAble = document.getElementsByClassName('tab-able');

// TODO refactor a lot of this
function maximize(imagePath) {
  document.body.classList.add('fixed');
  for (let link of tabAble) {
    link.tabIndex = -1;
  }

  // modal
  modal.classList.replace('hidden', 'fixed');
  const modalClasses = ['min-h-screen', 'bg-blue-light', 'w-full', 'top-0', 'left-0', 'z-10', 'opacity-100'];
  modal.classList.add(...modalClasses);

  // close button
  closeButton.classList.replace('hidden', 'fixed');
  const closeClasses = ['absolute',  'top-4', 'right-4', 'cursor-pointer', 'z-50'];
  closeButton.classList.add(...closeClasses);
  closeButton.tabIndex = 0;

  closeButton.addEventListener('click', function click(event) {
    closeModal(img);
    closeButton.removeEventListener('click', click);
  });

  closeButton.addEventListener('keyup', function enter(event) {
    if (event.key === 'Enter') {
      closeModal(img);
      closeButton.removeEventListener('keyup', enter);
    }
  });

  // image
  let img = document.createElement('img');
  const imgClasses = ['mx-auto', 'max-h-screen', 'p-12', 'transition-all', 'ease-in-out', 'opacity-0', 'duration-500'];

  img.classList.add(...imgClasses);
  img.addEventListener('load', function loaded() {
    img.classList.add(...['opacity-100']);
    img.removeEventListener('load', loaded);

    imgLoader.classList.add(...['hidden']);
  });

  img.setAttribute('src', imagePath);
  modal.appendChild(img);

  document.addEventListener('keyup', function escape(event) {
    if (event.key === 'Escape') {
      closeModal(img);
      document.removeEventListener('keyup', escape);
    }
  });
}

function closeModal(img) {
  modal.classList.replace('fixed', 'hidden');
  closeButton.classList.replace('fixed', 'hidden');

  for (let link of tabAble) {
    link.tabIndex = 0;
  }

  closeButton.tabIndex = -1;

  img.remove();

  imgLoader.classList.remove('hidden');
  document.body.classList.remove('fixed');
}