const divPopovers = document.querySelector('.popovers');

divPopovers.innerHTML = '<button type="button" class="btnPopovers">Click to toggle popover</button>';

const btnPopovers = document.querySelector('.btnPopovers');
const attributename = 'data-content';
const attributevalue = "And here's some amazing content. It's very engaging. Right?";
btnPopovers.setAttribute(attributename, attributevalue);

btnPopovers.addEventListener('click', () => {
  // console.log('клик');
  const massege = document.querySelector('.btnPopovers').getAttribute('data-content');
  // console.log(massege);

  const tooltipElement = document.createElement('div');

  tooltipElement.classList.add('messagePopovers');
  tooltipElement.textContent = massege;

  document.body.appendChild(tooltipElement);
});

// function showTooltip(element) {
//     let massege = document.querySelector('.btnPopovers').getAttribute("data-content");
//     console.log(massege);

//     console.log('element');
//         // const tooltipElement = document.createElement('div');
//         // tooltipElement.classList.add('messageButton');

//         // console.log('btnPopovers => click');
//         // console.log(this);

//             // console.log(element.getAttribute('data-content'));
//             // element.appendChild(tooltipElement);
//             // tooltipElement.textContent =
//     };

// import showTooltip from "./tooltip";
// function showTooltip(element) {
//     console.log(element);
//         console.log(this);

//     // constructor() {
//     //     this._tooltip = this;
//     // }

//     // showTooltip(element) {
//     //     console.log(element);
//     //     console.log(this);
//     // }
// };

// const tooltipFactory = showTooltip();showTooltip('body');// e.preventDefault();
