function hideLicense() {
var appBanners = document.querySelectorAll('div[class^="license_system-messages-wrapper"]');
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'none';
}
}
//delay
setTimeout(hideLicense, 1000);
