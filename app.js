var btnTranslate = document.querySelector("#btn-translate");//referenced the btn by using querySelector
var txtInput = document.querySelector("#text-input");// referenced to the  textarea by ussing querySelector
var outputDiv = document.querySelector("#output");// for the ouput div rerencing

 
var serverURL = ""https://api.funtranslations.com/translate/pirate.json""

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input // taking input from here
}

//error handling part

function errorHandler(error) {
    console.log("error occured", error); 
    alert("Something went wrong with server! try again after some time");
}

 function clickHandler() {
//   outputDiv.innerHTML = "asjsjsjs " + txtInput.value;
 var inputText = txtInput.value;

 // calling server for processing

 fetch(getTranslationURL(inputText))
 .then(response => response.json())
 .then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerHTML = translatedText;
 })
 .catch(errorHandler)

} ;


btnTranslate.addEventListener("click",  clickHandler)