///////question 1//////////////
function changeBG(){
    var userBG = prompt("Enter Background Color")
    var cont1 = document.getElementById("cont1")
    cont1.style.backgroundColor = userBG
}
function changeText(){
    var userText = prompt("Enter Text Color")
    cont1 = document.getElementById("cont1")
    cont1.style.color = userText

}
///////question 2/////////
// function myImg1(){
//     var myImg = document.getElementById("myImage")
//     if(myImg === "Show Image"){
    //         return myImg
    //     }


function myImg1(){
var myImage = document.getElementById("myImage")
// var btn1 = document.getElementById("btn1")
myImage.src = "./images/img1.jpeg" 
}    
function myImg2(){
    var myImg = document.getElementById("myImage")
    myImg.style.width = "400px"
}
function myImg3(){
    var myImg = document.getElementById("myImage")
    myImg.style.width = "100px"
}
function myImg4(){
    var myImg = document.getElementById("myImage")
    myImg.style.display = "none"
}


//////////////question 3////////
function bulbtoggle(value,bulb){
    if(value == 1){
        bulb.src = "./images/bulbon.jpeg"
    }
    else{
        bulb.src = "./images/bulboff.jpeg"
    }
}

////////////////question 4//////////////
function changecolor(){
    var color1 = prompt("enter your first para color")
    var color2 = prompt("enter your second para color")
    var color3 = prompt("enter your third para color")
    var color4 = prompt("enter your fourth para color")
    var para = document.getElementsByTagName("p")
    para[0].style.color = color1
    para[1].style.color = color2
    para[2].style.color = color3
    para[3].style.color = color4
}