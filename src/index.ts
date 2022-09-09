import { gsaphome } from '$utils/gsaphome';

// Create new link Element
var head = document.getElementsByTagName('HEAD')[0];
// Create new link Element
var link = document.createElement('link');
// set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';

link.href = 'http://localhost:3000/home.css';

// Append link element to HTML head
head.appendChild(link);

window.Webflow ||= [];
window.Webflow.push(() => {
  $('.tab-link').hover(function () {
    $(this).click();
  });
});
gsaphome();
