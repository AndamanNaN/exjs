let paragraphes = document.querySelectorAll("p");
paragraphes.forEach(paragraphe => {
  paragraphe.append(paragraphe.length);
});
// var text = ""
// text = "Ce paragraphe contient " + paragraphe.innerHTML.length + " charactères."
// paragraphe.insertAdjacentHTML('afterbegin', text)