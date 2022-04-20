//Cecilie JS start
alert("Denne hjemmesude er et studieprojekt i samarbejde med Butik Pulvis");
var arrayet = ["Virksomheden er ejet af Johnna og Christian Gøttsch Hansen, som i daglig tale blot kaldes Hr. og Fru. Hansen.", "<br>", "Hver onsdag - fredag tager de imod kunderne i Butik Pulvis, enten sammen eller hver for sig.", "<br>", "<br>", "Butikken er fyldt med en masse smukke, gamle og unikke genstande.", "<br>", "Disse gamle skatte finder vi blandt andet, når vi hjælper med at rydde forskellige boliger på en respekfuld måde. Butik Pulvis har selvfølgelig også en bevilling efter gældende regler til køb og salg af brugte varer - så der er aller nogen problemer.", "<br>", "<br>", "Vi går højt op i god kundekontakt, så hvis du beslutter dig for at besøge os i butikken - hvilket vi synes du skal - kan du være så heldig at ende med en kop kaff' i hånden og en hyggelig (og ikke for utidig) snak!", "<br>", "Vi glæ'er os til at se dig, det bli'r så leifig!"]
function printArray() {
    var p = document.getElementById('print');

    for (i = 0; i < arrayet.length; i++)
    p.innerHTML += arrayet[i];
}
//Cecilie JS slut