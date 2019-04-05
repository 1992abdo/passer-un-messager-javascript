 
var x = document.getElementById("submitBtn");
x.addEventListener("click", myfunction);


function myfunction (){
    var ss = document.getElementById("message");
    var cc= document.getElementById("message").value;
    

    if (cc==false){
        document.getElementById("id2").style.display="block";
    }else{
    document.getElementById("id1").innerHTML = cc ;
    ss.disabled = true;
    document.getElementById("id2").style.display = "none"; 
    ss.value="";
    
    }
    setTimeout(function (){
        ss.disabled = false;
     },5000);
}

