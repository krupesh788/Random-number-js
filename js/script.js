
function randomNumber(){

    let x = Math.floor((Math.random() * 1000) + 1);

    document.getElementById("p1").innerHTML = `Random Number: ${x}`;
}