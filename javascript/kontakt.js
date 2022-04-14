/*Kontaktformular*/

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

/*Onfocus*/

function myOnfocus1() {
  var onfocus = document.getElementById('navn');
  onfocus.value = "";
}

function myOnfocus2() {
  var onfocus = document.getElementById('email');
  onfocus.value = "";
}

function myOnfocus3() {
  var onfocus = document.getElementById('emne');
  onfocus.value = "";
}

function myOnfocus4() {
  var onfocus = document.getElementById('besked');
  onfocus.value = "";
}


/*Onblur*/

function myOnblur1() {
  var onblur = document.getElementById('navn');

  if (onblur.value == "" ) {
    onblur.value = "Navn...";

  }
}

function myOnblur2() {
  var onblur = document.getElementById('email');

  if (onblur.value == "" ) {
    onblur.value = "Email...";

  }
}

function myOnblur3() {
  var onblur = document.getElementById('emne');

  if (onblur.value == "" ) {
    onblur.value = "Emne...";

  }
}

function myOnblur4() {
  var onblur = document.getElementById('besked');

  if (onblur.value == "" ) {
    onblur.value = "Besked...";

  }
}
