import { gsaphome } from '$utils/gsaphome';

// Create new link Element
var linkrel = document.createElement('link');

// set the attributes for link element
linkrel.rel = 'stylesheet';

linkrel.type = 'text/css';

linkrel.ref = 'http://localhost:3000/home.css';

window.Webflow ||= [];
window.Webflow.push(() => {
  $('.tab-link').hover(function () {
    $(this).click();
  });
});
gsaphome();
