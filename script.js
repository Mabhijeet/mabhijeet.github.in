/*var button = document.getElementsByTagName("button")[0];
button.addEventListener("mouseenter", function(){
	console.log("Clickme@@@");
})*/
var button= document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var Listitem = document.querySelectorAll("li");
var i = Listitem.length;
//ul.classList.add(".done");



function inputLength(){
	return input.value.length;
}

function addList() { 
	var li = document.createElement("li");
    var Dbutton= document.createElement("button");
    var text= document.createTextNode(input.value);
    Dbutton.appendChild(document.createTextNode("X"));
	li.append(text,Dbutton);
	 ul.appendChild(li);  
    i++;
 
 Dbutton.addEventListener("click", function() {
    	ul.removeChild(li);
    	i--;
 })
 input.value="";
}
		


function addListAfterClick() {
	if(inputLength()>0){
		addList();
	}}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13) {
		addList();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener( "keypress", addListAfterKeypress);