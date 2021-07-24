var chatting=document.getElementById("letsChat");

// chatting.addEventListener("click",function(){
//     chatting.style.display="block"
// })

function myFunction()
    {
        console.log("Function Running")
        chatting.style.display;
        chatting.style.display="flex";
        chatting.style.flexDirection="row"
        chatting.style.justifyContent="space-around"


    }
function closeit()
{
    chatting.style.display="none";
}

function contactMe1(){
    document.getElementById("contact").style.display="flex";
    document.getElementById('contact').style.flexDirection="row"
    document.getElementById('contact').style.justifyContent="space-around"
}

function contactMe2(){
    setTimeout(function(){document.getElementById("contact").style.display="none"},5000)
    
}