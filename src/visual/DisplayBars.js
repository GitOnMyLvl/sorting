class DisplayBars {
  constructor(container) {
    this.container = container;
  }

  displayArray(array, highlights = {}) {
    this.container.innerHTML = '';
    array.forEach((value, index) => {
      const bar = document.createElement('div');
      bar.style.height = `${value * 0.3}rem`;
      bar.classList.add('array-bar');
      if (highlights[index]) {
        bar.classList.add(highlights[index]);
      }
      this.container.appendChild(bar);
    });
  }
}

export default DisplayBars;
