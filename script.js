let opening = document.getElementById("opening"); 
let navbar = document.getElementById("navbar"); 
let aboutMe = document.getElementsByClassName("aboutMe");
let projets = document.getElementsByClassName("projects"); 
let contact = document.getElementsByClassName("contact");
let footer = document.getElementsByClassName("footer")

function masukNavbar() {
    opening.style.display = 'none';
    navbar.style.display = 'block';

    // Menampilkan semua elemen <li> di dalam <nav>
    let listItems = navbar.querySelectorAll("li");
    listItems.forEach(function(item) {
        item.style.display = 'block';
    });
}

function aboutme() {
    
    for (let i = 0; i < projets.length; i++) {
        projets[i].style.display = 'none';
    }
    for (let i = 0; i < contact.length; i++) {
        contact[i].style.display = 'none';
    }
    for (let i = 0; i < footer.length; i++) {
        footer[i].style.display = 'none';
    }

    opening.style.display = 'none';

    for (let i = 0; i < aboutMe.length; i++) {
        aboutMe[i].style.display = "flex";
      }
}
function projects() {
    for (let i = 0; i < aboutMe.length; i++) {
        aboutMe[i].style.display = 'none';
    }
    for (let i = 0; i < contact.length; i++) {
        contact[i].style.display = 'none';
    }
    for (let i = 0; i < footer.length; i++) {
        footer[i].style.display = 'none';
    } 

    opening.style.display = 'none';

    for (let i = 0; i < aboutMe.length; i++) {
        projets[i].style.display = 'flex';
      }
}
function contacts() {
    for (let i = 0; i < aboutMe.length; i++) {
        aboutMe[i].style.display = 'none';
    }
    for (let i = 0; i < projets.length; i++) {
        projets[i].style.display = 'none';
    }
    for (let i = 0; i < footer.length; i++) {
        footer[i].style.display = 'none';
    } 

    opening.style.display = 'none';

    for (let i = 0; i < contact.length; i++) {
        contact[i].style.display = 'flex';
      }
}
function footers() {
    for (let i = 0; i < aboutMe.length; i++) {
        aboutMe[i].style.display = 'none';
    }
    for (let i = 0; i < projets.length; i++) {
        projets[i].style.display = 'none';
    }
    for (let i = 0; i < contact.length; i++) {
       contact[i].style.display = 'none';
    } 


    opening.style.display = 'none';

    for (let i = 0; i < aboutMe.length; i++) {
        footer[i].style.display = 'grid'; 
        
      }
}