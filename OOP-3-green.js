<!doctype html>
<html>
 <body>
  <h3>Tweeter</h3>
  <p id="tweet">
   <em>What's on your mind?</em>
  </p>
  <p id="messages">New Messages</p>
  <script>
    // to access an element, retrieve the entire element: (tags, attributes, text), use:  
    //=> document.getElementById()

    // To make changes to the text between the tags, we need to retrieve it with .innerHTML
    // adding ".innerHTML" gives us the tags' text, WITHOUT the tags
    //=> console.log(document.getElementById("messages").innerHTML);

    // After we retrieve it, we can update it by using the = sign followed by a new value
    //=> document.getElementById("messages").innerHTML = "No messages";

    // create variables and use them to store the HTML elements we access
    //=> var element = document.getElementById("messages");

    // we can access the text of the variable, by using .innerHTML
    //=> console.log(element.innerHTML);
    
    var element = document.getElementById("messages").innerHTML;
    element.innerHTML = "No message";
    
    document.getElementById("tweet");
  </script>
 </body>
</html>