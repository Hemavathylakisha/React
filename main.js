function myFunction() {
    // Get the value of the input field with id="username"
    let x = document.getElementById("username").value;
    
   // Create an "li" node:
const node = document.createElement("li");

// Create a text node:
const textnode = document.createTextNode(x);

// Append the text node to the "li" node:
node.appendChild(textnode);

// Append the "li" node to the list:
document.getElementById("demo").appendChild(node);
 
node.addEventListener("click", function() {
    this.style.textDecoration = "line-through";
    
});

  }