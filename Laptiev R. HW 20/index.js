const inputAdress = document.getElementById('input');
const buttonHttp = document.getElementById('button1');
const buttonHttps = document.getElementById('button2');

let adress = "";
function validationHttp(){
    if (inputAdress.value === "") {
        alert('Please enter your URL adress');
        return;
    }else{
        adress = "http://" + inputAdress.value;
        return(document.getElementById('input').Value = adress); 
    }   
};

function validationHttps(){
    if (inputAdress.value === "") {
        alert('Please enter your URL adress');
        return;
    }else{
        adress = "https://" + inputAdress.value;
        return(document.getElementById('input').Value = adress); 
    }   
};

buttonHttp.addEventListener("click", () => {
    validationHttp();
    return console.log(document.getElementById('input').Value)
});

buttonHttps.addEventListener("click", () => {
    validationHttps();
    return console.log(document.getElementById('input').Value)
});