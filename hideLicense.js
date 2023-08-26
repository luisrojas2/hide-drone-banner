function hideLicense() {
var appBanners = document.getElementsByClassName('license_system-messages-wrapper__2jNgH');
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'none';
}
}
//delay
setTimeout(hideLicense, 1000);
