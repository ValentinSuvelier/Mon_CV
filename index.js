function storageDark(){
    if(localStorage.getItem("darkmode") == 1){
        document.querySelector(".change").setAttribute("href", "darkmode.css");
    }
    else{
        document.querySelector(".change").setAttribute("href", "style.css");
    }
}




let switchMode = document.querySelector(".switch");
switchMode.addEventListener("click", function(){
    let DarkMode = switchMode.getAttribute("data-check");
    if(DarkMode == 0){
        switchMode.setAttribute("data-check", 1);
        localStorage.setItem("darkmode", 1);
    }
    else{
        switchMode.setAttribute("data-check", 0);
        localStorage.setItem("darkmode", 0);
    }
    storageDark();
});

storageDark();