const divPopovers = document.querySelector('.popovers');

divPopovers.innerHTML = '<button type="button" class="btnPopovers">Click to toggle popover</button>';

const btnPopovers = document.querySelector('.btnPopovers');
let attributename = "data-content";
let attributevalue = "And here's some amazing content. It's very engaging. Right?";
btnPopovers.setAttribute(attributename, attributevalue);



import showTooltip from "./tooltip";

const tooltipFactory = showTooltip();

btnPopovers.addEventListener('click', (e) => {
    // e.preventDefault();
    
    tooltipFactory.showTooltip('body');
});

