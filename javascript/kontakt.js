/*Array og loop*/

let array = ["<h3>Telefon:</h3>", "+45 61 74 39 39", "<br>", "<br>", "<h3>E-mail:</h3>", "Mulig-email@gmail.com"]

function printArray() {
  let p = document.getElementById('out');

  for (i = 0; i < array.length; i++)
    p.innerHTML += array[i];

}

/*+ ('<br>')*/


/*Kontaktformular*/

function myFunction() {
  let navn = document.getElementById('navn');
  let defaultNavn = navn.defaultValue;
  let currentNavn = navn.value;

  let email = document.getElementById('email');
  let defaultEmail = email.defaultValue;
  let currentEmail = email.value;

  let emne = document.getElementById('emne');
  let defaultEmne = emne.defaultValue;
  let currentEmne = emne.value;

  let besked = document.getElementById('besked');
  let defaultBesked = besked.defaultValue;
  let currentBesked = besked.value;


  if (defaultNavn == currentNavn || defaultEmail == currentEmail || defaultEmne == currentEmne || defaultBesked == currentBesked) {
    alert('Udfyld alt!');
  }


  else {
    alert('Din besked er sendt, du vil få svar over mail inden længe.');
  }
}

/*Onfocus*/

function myOnfocus1() {
  let onfocus = document.getElementById('navn');
  onfocus.value = "";
}

function myOnfocus2() {
  let onfocus = document.getElementById('email');
  onfocus.value = "";
}

function myOnfocus3() {
  let onfocus = document.getElementById('emne');
  onfocus.value = "";
}

function myOnfocus4() {
  let onfocus = document.getElementById('besked');
  onfocus.value = "";
}


/*Onblur*/

function myOnblur1() {
  let onblur = document.getElementById('navn');

  if (onblur.value == "" ) {
    onblur.value = "Navn...";

  }
}

function myOnblur2() {
  let onblur = document.getElementById('email');

  if (onblur.value == "" ) {
    onblur.value = "Email...";

  }
}

function myOnblur3() {
  let onblur = document.getElementById('emne');

  if (onblur.value == "" ) {
    onblur.value = "Emne...";

  }
}

function myOnblur4() {
  let onblur = document.getElementById('besked');

  if (onblur.value == "" ) {
    onblur.value = "Besked...";

  }
}
