document.getElementById("textfield1".addEventListener("keydown", function(event){
  if (event.key === "Enter"){
    getUserInput(); }
});

function myFunction(){
  let username = document.getElementById("textfield1).value;
  document.getElementById("displaInput").innerText = "You entered: " + userInputValue;
}
