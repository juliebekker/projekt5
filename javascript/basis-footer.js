//Amalie JS start 
let footerInformationOne = ["ADRESSE", "Vesterbro 13, 5000 Odense C", "TLF.", "61 74 39 39"];
let footerInformationTwo = ["BUTIKKENS ÅBNINGSTIDER", "Mandag - fredag: 11:00 - 17:30", "Lørdag: 11:00 - 15:00", "Søndag: Lukket"];

let textOne = "";
for (let i = 0; i < footerInformationOne.length; i++) {
    textOne += "<p>" + footerInformationOne[i] + "</p>";
  }
document.getElementById("address-contact").innerHTML = textOne;

let textTwo = "";
for (let i = 0; i < footerInformationTwo.length; i++) {
    textTwo += "<p>" + footerInformationTwo[i] + "</p>";
  }
document.getElementById("opening-hours").innerHTML = textTwo;


function openSocialMedia() {
    if (document.getElementById("instagram-media").onclick) {
        alert("Åben instagram?");
    } else if (document.getElementById("facebook-media").onclick) {
        alert("Åben facebook?");
    }
}
  
//Amalie JS end