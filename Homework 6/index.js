//Task 1

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="test">First</div>
    <script>
         document.getElementById("test").innerHTML = "Last";
         //document.querySelector("div").innerHTML = "Last";
     </script>
</body>
</html>

//Task 2

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img class="image" src="dog.jpg">
    <script>
        document.querySelector("img").src = "cat.jpg";
        alert(document.querySelector("img").outerHTML);
    </script>
</body>
</html>

//Task 3

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <h2>Article header</h2>      
          <div id="text">
            <p>First paragraph</p>
            <p>Second paragraph</p>
            <p>Third paragraph</p>
          </div>
        <p>Another text</p>
        <script>
            const pr = document.querySelector("div").querySelectorAll("p");
            for (let j = 0; j < pr.length; j++) {
            document.write("Selector text " + j + ": " + pr[j].innerHTML + "<br \/>" + "<br \/>");
        }
        </script>
    
</body>
</html>

//Task 4

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul id="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
    <script>
    const list = document.querySelector("ul");
    alert(list.firstElementChild.innerHTML);
    alert(list.lastElementChild.innerHTML); 
    alert(list.children[1].innerHTML);
    alert(list.children[3].innerHTML);
    alert(list.children[2].innerHTML);
    </script>

</body>
</html>

//Task 5

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>I'am a big header!!!</h1>
        <div id="myDiv">
            <p>First paragraph</p>
            <p>Second paragraph</p>
            <p>Third paragraph</p>
            <p>Fourth paragraph</p>
        </div>
        <ul id="myList">
            <li>Make</li>
            <li>me</li>
            <li>horizontal!</li>
        </ul>
        <span>Make me invisible, please!</span>
        <script>
            document.querySelector("h1").style.backgroundColor = "LimeGreen";
            document.querySelector("div").querySelector("p").style.fontWeight = "bold";
            document.querySelector("div").querySelectorAll("p")[1].style.color = "red";
            document.querySelector("div").querySelectorAll("p")[2].style.textDecoration = "underline";
            document.querySelector("div").querySelectorAll("p")[3].style.fontStyle = "oblique";
            document.querySelector("ul").remove();
            var d = document.createElement("DIV");
            d.innerHTML = "Makemehotizontal";
            document.body.appendChild(d);  
            document.querySelector("span").remove()

        </script>

</body>
</html>

//Task 6

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" id="input1" value="Text1">
    <input type="text" id="input2" value="Text2">
    <script>
        const value1 = prompt("Enter 1 value");
        const value2 = prompt("Enter 2 value");
        input1.value = value1;
        input2.value = value2;
        input1.value = value2;
        input2.value = value1;
    </script>
</body>
</html>

//Task 7

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var mn = document.createElement("MAIN"); 
        mn.className = "mainClass check item"; 
        document.body.appendChild(mn); 

        var dv = document.createElement("DIV");
        dv.id = "myDiv";
        document.querySelector("main").appendChild(dv);

        let p = document.createElement("P");
        p.innerHTML = "First paragraph";
        document.querySelector("div").appendChild(p);
    </script>

</body>
</html>
