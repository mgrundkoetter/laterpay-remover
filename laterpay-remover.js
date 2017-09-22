javascript:(function removeLaterPayfromSPON() {
$('.article-section svg+div').removeAttr('class');
$('.article-section svg+div+div').remove();
SPLaterpay.callback.hasAccess();
})();
javascript:(function removeAdblockerNagScreen() {
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".ua-detected {display: none !important;} #wrapper-content {opacity: 1 !important;filter: none !important;pointer-events: auto !important;}";
document.body.appendChild(css);
})();
