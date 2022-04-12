//alert("tjek om js virker!");
//Cecilie JS start
  //Herunder er burgermenu lavet ved brug af "getElementById", som er hentet fra DOM. 
  
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
