const navicon = document.getElementById("toggleLink");

function switchNavbar(){
    const iconChange = navicon.querySelector("i").classList;
    console.log(iconChange);
    //fazer o botão mudar no HTML.
}

navicon.addEventListener("click", ()=>{
    switchNavbar();
});