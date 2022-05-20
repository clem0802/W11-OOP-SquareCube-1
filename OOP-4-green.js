// USER-FRIENDLY WEBPAGE
// STEP BY STEP


// CREATE ELEMENT (1)
<!doctype html>
<html>
 <body>
  <h2>New Messages</h2>
  <script>
    var paragraph = document.createElement() // to create a new element
    var paragraph = document.createElement("p") // to create a specific element: paragraph
    paragraph.innerHTML; // need this to store-access text in paragraph
    paragraph.innerHTML = "Is Isaac happy?"; // to set the text of the paragraph
  </script>
 </body>
</html>



// NEST ELEMENT (2)
<!doctype html>
<html>
    <body id="parent">
        <p id="child"></p>
    </body>
</html>
-----------------------------------------
<!doctype html>
<html>
    <body id="parent">
        <h2>New Messages</h2>>
        <script>
            var bodyElement = document.getElementById("parent");
            var paragraph = document.createElement("p");
            paragraph.innerHTML = "Is Isaac happy?";
            bodyElement.appendChild(paragraph); //=> to NEST-ADD "paragraph" inside the "bodyElement"
        </script>
    </body>
</html>



// REMOVE ELEMENT (3)
<!doctype html>
<hmtl>
    <body id="parent">
        <h2>Facebook</h2>
        <p id="child">"Is Isaac happy?"</p>
        <script>
            var bodyElement = document.getElementById("parent");
            var paragraph = document.getElementById("child");
            bodyElement.removeChild(paragraph);
        </script>
    </body>
</hmtl>



// INCLUDE JAVASCRIPT
<!doctype html>
<html>
 <body>
  HTML goes here
  <script src="script.js"></script>
 </body>
</html>