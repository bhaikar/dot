document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    // let menuIcon = document.getElementById("menu-icon");
let rotate_1=document.getElementById('rotate_1');
let rotate_2=document.getElementById('rotate_2');
let hide_1=document.getElementById('hide_1');
let hide_2=document.getElementById('hide_2');

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        // console.log(navLinks.classList.value)
        if (navLinks.classList.value == "nav-links show"){
            rotate_1.style.transform = "rotate(45deg)";
            rotate_2.style.transform = "rotate(-45deg)";
            hide_1.style.zIndex = "-1";
            hide_2.style.zIndex = "-1";
        }
        if (navLinks.classList.value == "nav-links"){
            rotate_1.style.transform = "rotate(0deg)";
            rotate_2.style.transform = "rotate(0deg)";
            hide_1.style.zIndex = "0";
            hide_2.style.zIndex = "0";
        }
        
    });
});


// // document.getElementById("p2").style.color = "blue";
// menuIcon.addEventListener('click',()=>{
//     if (hide == 0){
//         console.log('hi');
//         rotate_1.style.transform = "rotate(-45deg)";
//         rotate_2.style.transform = "rotate(+45deg)";
//         hide_1.style.zIndex = "0";
//         hide_2.style.zIndex = "0";
//         hide = 1
//     }    
// });
