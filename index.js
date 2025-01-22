var num=document.querySelectorAll(".drum").length

for(var i=0;i<num;i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleclick);

function handleclick(){
    alert("I got Clicked");
}
   

}
