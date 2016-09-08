javascript:(function removeLaterPayfromSPON() {
$('.article-section svg+div').removeAttr('class');
$('.article-section svg+div+div').remove();
SPLaterpay.callback.hasAccess();
})();
