function myFunction() {
  var navn = document.getElementById('navn');
  var defaultNavn = navn.defaultValue;
  var currentNavn = navn.value;

  var email = document.getElementById('email');
  var defaultEmail = email.defaultValue;
  var currentEmail = email.value;

  var emne = document.getElementById('emne');
  var defaultEmne = emne.defaultValue;
  var currentEmne = emne.value;

  var besked = document.getElementById('besked');
  var defaultBesked = besked.defaultValue;
  var currentBesked = besked.value;


  if (defaultNavn == currentNavn || defaultEmail == currentEmail || defaultEmne == currentEmne || defaultBesked == currentBesked) {
    alert('Udfyld alt!');
  }


  else {
    document.getElementById("result").innerHTML = "Din besked er sendt, du vil få svar over mail inden længe";
  }
}
