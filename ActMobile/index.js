let checkHex = /[0-9A-Fa-f]{6}/g;
let today = new Date();
let time = today.getHours();
const greetingMessage = document.getElementById('greeting');


if (time < 12) {
  console.log('good morning')
  message = 'Good Morning'
} else if (time < 18) {
  console.log('good afternoon')
  message = 'Good Afternoon'
} else {
  console.log('good evening')
  message = 'Good Evening'
}

function changeColor(){
let hexInput = document.getElementById('searchColor').value;
        if(checkHex.test(hexInput)) {
    document.body.style.backgroundColor =hexInput;

} else {
    alert('Invalid HEX Code');
}
}

window.addEventListener("load",function(){
    setTimeout(
        function open(event){
            var blur= document.querySelector("#content");
            blur.classList.toggle('active');
            greetingMessage.innerHTML = message;
            document.querySelector(".message").style.display='block';
            document.querySelector("#closeBtn").style.display='block';
        }
    )
})
window.addEventListener("load",function(){
    setTimeout(
        function open(event){
            var blur= document.querySelector("#content");
            blur.classList.remove('active');
            document.querySelector(".message").style.display='none';
            document.querySelector("#closeBtn").style.display='none';
        },5000
    )
})
document.querySelector('#closeBtn').addEventListener("click",function(){
            var blur= document.querySelector("#content");

            blur.classList.remove('active');
    document.querySelector("#popup").style.display="none";
    document.querySelector("#closeBtn").style.display="none";
})