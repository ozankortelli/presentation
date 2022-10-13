const body=document.querySelector("body");
const button=document.querySelector("button");
const colors=["black","yellow","green","red","white","orange","pink","purple","blue"];



 button.addEventListener("click",changeBackground);

 function changeBackground() {
    console.log("butona tıklandı");
    const rastgelesayi = Math.floor(Math.random()*colors.length);
    console.log(rastgelesayi);
    const secilenrenk=colors[rastgelesayi]; 
    body.style.background= secilenrenk;

 }