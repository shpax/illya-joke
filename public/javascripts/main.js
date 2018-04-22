window.addEventListener('load', () => {
  const cb = document.getElementById('increment-button');
  const counter = document.getElementById('counter');

  cb.onclick = () => {
    const newValue = +counter.innerText + 1;
    counter.innerText = newValue;
    fetch(`/value/${newValue}`);
  }
});