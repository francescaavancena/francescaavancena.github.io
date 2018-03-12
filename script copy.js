

var myVariable = 20
var number2 = 20
var myWord = "Snow"

var showDog = false
//This is my function
function saySomething(){

    var result = myVariable + number2

console.log("wassup" + myVariable)

}
function toggleDoge(){
    var img = document.getElementById("dogPic")
    if (showDog == false){
        ///hiding
        img.style.visibility = "hidden"
        showDog = true

        //change state of dog

    }else if(showDog == true){
        ///reveal
        img.style.visibility = "visible"
        showDog = false

        // change state
    }
}