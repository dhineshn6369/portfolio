
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let sidemenu = document.getElementById("sidemenu");


function openmenu(){
    sidemenu.style.right = "0";
};
function closemenu(){
    sidemenu.style.right = "-200px";
};

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    };
    for(let tabcontent of tabcontents){
       tabcontent.classList.remove("active-tab");
    };
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};


var form = document.getElementById('sheetdb.form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action,{
        method : "post",
        body : new FormData(document.getElementById("sheetdb.form")),
    }).then(
        response =>response.json()
    ).then(()=>{
        alert('Submit Sccsecefully')
     });
});
 

    
    
    




