// import { funcChange } from './test.js';
// import {  detailInitialize } from './SPAasync.js';
// import {  detailFunc } from './urlChange.js';
// import { initilize } from "./initilize.js";

let moreInfo = Array.from(document.getElementsByClassName('moreInfo'));

function selectBox (id) {
    moreInfo.forEach(b => {
        b.classList.toggle('selected', b.id === id);
				console.log(id);
    });
}

moreInfo.forEach(b => {
    let id = b.id;
    b.addEventListener('click', e => {
        history.pushState({id}, `Selected: ${id}`, `./selected=${id}`)
        selectBox(id);
    });
});

window.addEventListener('popstate', e => {
    selectBox(e.state.id);
			console.log(e.state.id);
});

// history.replaceState({id: null}, 'Default state', './');
