var menuIcon = document.querySelector('#menu-icon');
var meni = document.querySelector('.meni');
var closeMenuIcon = document.querySelector('#close-icon');
var vidljivMeni = false;
menuIcon.addEventListener('click', toggleMenu);
closeMenuIcon.addEventListener('click', toggleMenu);


function toggleMenu() {

    // ako meni nije vidljiv, prikazemo ga
    if (!vidljivMeni) {
        meni.style.display = 'block';
        closeMenuIcon.style.display = 'block';
    }
    // ako jeste onda ga sakrijemo
    else {
        meni.style.display = 'none';
        closeMenuIcon.style.display = 'none';
    }
    vidljivMeni = !vidljivMeni;
}