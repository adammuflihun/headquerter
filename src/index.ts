import { gsaphome } from '$utils/gsaphome';

window.Webflow ||= [];
window.Webflow.push(() => {
  $('.tab-link').hover(function () {
    $(this).click();
  });
});
gsaphome();
