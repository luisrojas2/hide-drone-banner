function hideLicense() {
  var elements = document.querySelectorAll('license_system-messages-wrapper__2jNgH');
  for (var i = 0, l = elements.length; i < l; i++) {
    subElement = elements[i].querySelector(':scope license_system-messages-wrapper__2jNgH');
    if (subElement.firstChild.tagName != 'A') {
      elements[i].style.display = "none";
    }
  }
}

//delay
setTimeout(hideLicense, 1000);
