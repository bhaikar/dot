// document.addEventListener('DOMContentLoaded', function() {
//     const menuIcon = document.getElementById('menu-icon');
//     const navLinks = document.getElementById('nav-links');

//     menuIcon.addEventListener('click', function() {
//         navLinks.classList.toggle('open');
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

let rotate_1=document.getElementById('rotate_1');
let rotate_2=document.getElementById('rotate_2');
let hide_1=document.getElementById('hide_1');
let hide_2=document.getElementById('hide_2');

// console.log(rotate_1,rotate_2,hide_1,hide_2)

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("open");

        // console.log(navLinks.classList.value)

        if (navLinks.classList.value == "nav-links open"){
            // console.log('if1')
            
            rotate_1.style.transform = "rotate(45deg)";
            rotate_2.style.transform = "rotate(-45deg)";
            hide_1.style.zIndex = "-1";
            hide_2.style.zIndex = "-1";
        }
        if (navLinks.classList.value == "nav-links"){
            // console.log('if2')
            rotate_1.style.transform = "rotate(0deg)";
            rotate_2.style.transform = "rotate(0deg)";
            hide_1.style.zIndex = "0";
            hide_2.style.zIndex = "0";
        }
        
    });
});