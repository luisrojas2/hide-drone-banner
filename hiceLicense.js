function hideCards() {
  var elements = document.querySelectorAll('div.card');
  for (var i = 0, l = elements.length; i < l; i++) {
    subElement = elements[i].querySelector(':scope div.card-body');
    if (subElement.firstChild.tagName != 'A') {
      elements[i].style.display = "none";
    }
  }
}

// execute after a second to give the page time to create the
// elements you want to remove
setTimeout(hideCards, 1000);
