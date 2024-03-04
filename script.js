function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
var typingEffect = new Typed(".typedText",{
    strings : ["Engineer","Frontend Developer","Coder","Software Developer"],
    loop : true,
    typeSpeed : 20, 
    backSpeed : 120,
    backDelay : 2500
 })