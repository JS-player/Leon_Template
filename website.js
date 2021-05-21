// Open links menu on click >>>>
document.getElementsByClassName("icon")[0].addEventListener("click",()=>{
    let linksMenu = document.getElementsByTagName("ul")[0];
    if (linksMenu.style.display === ""){
     linksMenu.style.display = "block";
    }else{
        linksMenu.style.display = "";
    }
});