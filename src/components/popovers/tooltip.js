console.log('tooltip.js');

export default class Tooltip {
  constructor() {
    this._tooltip = this;
  }

  showTooltip(element) {
    console.log(element);
    console.log(this);
  }
}

// export default function showTooltip(element) {
//     const tooltipElement = document.createElement('div');
//     tooltipElement.classList.add('messageButton');

//     console.log('btnPopovers => click');
//     console.log(this);
//     // console.log(element.getAttribute('data-content'));
//     // element.appendChild(tooltipElement);
//     // tooltipElement.textContent =
// };

// export class
