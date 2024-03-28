class VisualizeArrayManager {
  constructor(container) {
    this.container = container;
  }

  displayArray(array, highlights = {}) {
    this.container.innerHTML = '';
    const maxValue = Math.max(...array);
    const containerHeight = this.container.clientHeight;
    array.forEach((value, index) => {
      const bar = document.createElement('div');
      const barHeight = (value / maxValue) * (containerHeight - 20);
      bar.style.height = `${barHeight}px`;
      bar.classList.add('array-bar');
      if (highlights[index]) {
        bar.classList.add(highlights[index]);
      }
      this.container.appendChild(bar);
    });

    VisualizeArrayManager.adjustElementWidths();
  }

  static adjustElementWidths() {
    const arrayBars = document.querySelectorAll('.array-bar');
    const barWidth = `${100 / arrayBars.length}%`;
    arrayBars.forEach((bar) => {
      const barElement = bar;
      barElement.style.width = barWidth;
    });
  }
}

export default VisualizeArrayManager;
