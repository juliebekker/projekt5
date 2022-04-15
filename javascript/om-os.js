console.log("JS is running");

function tilbageFunktion() {
    window.history.back()
}

let samarbejdspartnere = ["- Røde kors", "- Kirkens korshær", "- Red barnet", "- Folkekirkens nødhjælp"];

let citationstegn = "";

samarbejdspartnere.forEach(printAfSamarbejdspartnere);
document.getElementById("listeoverpartnere").innerHTML = citationstegn;

function printAfSamarbejdspartnere(næsteelement) {
    citationstegn += næsteelement + "<br>" + "<br>";
}

let aktivelleroverstået = "aktiv";

if (aktivelleroverstået == "overstået") {
  document.getElementById("midlertidiginformation").innerHTML = "Værd opmærksom på, at i løbet af denne måde sætter særligt fokus på hvordan man kan komme af med sit affald på den mest hensynsmæssige måde";
} else {
  document.getElementById("midlertidiginformation").style.display = "none";
}