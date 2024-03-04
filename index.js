console.log('bobbyhadz.com');

document.addEventListener(
  'click',
  function handleClickOutsideBox(event) {
    const box = document.getElementById('box');

    if (!box.contains(event.target)) {
      box.style.display = 'none';
    }
  },
);
