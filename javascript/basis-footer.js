//Amalie JS start 
let footerInformation = ["ADRESSE", "Vesterbro 13, 5000 Odense C", "Tlf. 61 74 39 39", "BUTIKKENS ÅBNINGSTIDER", "Mandag - fredag: 11:00 - 17:30", "Lørdag: 11:00 - 15:00", "Søndag: Lukket"];

document.getElementById("address-contact").innerHTML = "<p>" + footerInformation[0] + footerInformation[1] + footerInformation[2]+ "</p>";
document.getElementById("opening-hours").innerHTML = "<p>" + footerInformation[3] + footerInformation[4] + footerInformation[5] + footerInformation[6] + "</p>";

function openSocialMedia() {
    if (document.getElementById("instagram-media").onclick) {
        alert("Åben instagram?");
    } else if (document.getElementById("facebook-media").onclick) {
        alert("Åben facebook?");
    } else {
        alert("huh?");
    }
}



//Amalie JS slut