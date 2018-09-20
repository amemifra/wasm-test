import App from './App.html';
import { Store } from 'svelte/store.js';

document.querySelector('title').innerText = 'NWA'

/** State Management */
/*** set up */
const store = new Store({
  name: 'Native Web Application',
  page: 'homepage'
});
/*** handling */
store.on('state', ({changed, current}) => {
  /**** Routing event */
  if (changed.page) location.hash = `#${current.page}`;
})

/** Routing */
/*** on create */
location.hash.indexOf('#') < 0 
? location.hash = '#homepage'
: store.set({
  page: location.hash === '' || location.hash.substr(1) === ''? 'homepage' : location.hash.substr(1)
});
/*** location on state  */
window.onhashchange = () => {
  if (store.get().page !== location.hash.substr(1)) store.set({page: location.hash.substr(1)})
}

/** Rendering */
const app = new App({
	target: document.body.querySelector('#nwa'),
  store
});

/** Debugging */
window.store = store;

export default app;