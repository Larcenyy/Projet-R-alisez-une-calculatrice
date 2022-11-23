let text2 = document.getElementById("result2");
let btn = document.querySelectorAll("button");

let paper = document.getElementById("paper");


paper.addEventListener("click", function (){ // Permet de copier dans le press-papier"
    navigator.clipboard.writeText(text2.value).then(function() {
        alert('Texte copié')
    }, function() {
        alert('Text non copié')
    });
})

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function (){
        myFunc(i)
    })
}

function myFunc(i) {
    switch(btn[i].innerText)
    {
        case "=":
            text2.value = eval(text2.value)
            break;
        case "DEL":
            text2.value = "";
            break;
        default:
            text2.value += btn[i].innerText;
    }
}
