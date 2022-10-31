var inputText = document.querySelector("#inputArea");
var button = document.querySelector("#btn-translate");
var outputText = document.querySelector("#outputArea");
var url = "https://api.funtranslations.com/translate/pig-latin.json";

function getServerURL(text) {
  return encodeURI(url + "?text=" + text);
}

function pigletTranslation() {
  fetch(getServerURL(inputText.value))
    .then((result) => result.json())
    .then((json) => {
      var output = json.contents.translated;
      outputText.innerText = output;
    })
    .catch((error) => {
        alert("somyhing went wrong!! try after some time")
        console.log(error);
    })
}
button.addEventListener("click", pigletTranslation);