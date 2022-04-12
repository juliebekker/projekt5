alert("tjek om js virker!");
//Cecilie JS start
  /*Herunder er burgermenu lavet ved brug af "getElementById", som er hentet fra DOM. 
  */
  let burgerMenu = document.getElementById('burgermenu');
  let overlay = document.getElementById('menu');
  burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });

//Herunder er kommentarboks lavet ved brug af "getElementById", som også er hentet fra DOM.
  let send= document.getElementById("post");
  send.addEventListener("click", function(){
    let commentBoxValue= document.getElementById("comment-box").ariaValueMax;
    
    let li = document.createElement("li");
    let text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
  });
//Cecilie JS slut




















//Amalie JS start 
let footerInformation = ["ADRESSE", "Vesterbro 13, 5000 Odense C", "Tlf. 61 74 39 39", "BUTIKKENS ÅBNINGSTIDER", "Mandag - fredag: 11:00 - 17:30", "Lørdag: 11:00 - 15:00", "Søndag: Lukket"];
console.log(footerInformation.length);


document.getElementById("address-contact").innerHTML = "<p>" + footerInformation[0] + footerInformation[1] + footerInformation[2]+ "</p>";


//Amalie JS slut