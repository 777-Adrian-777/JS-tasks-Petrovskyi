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
    <script>
        let op = window.open("", "", "height = 300px, width = 300px");

        function resizeTheWindow() {
            op.resizeTo(500, 500);
        }
        window.setTimeout(resizeTheWindow, 2000);

        function moveTheWindow() {
            op.moveTo(200, 200);
        }
        window.setTimeout(moveTheWindow, 4000);

        function closeTheWindow() {
            op.close();
        }
        window.setTimeout(closeTheWindow, 6000);

    </script>
</body>
</html>

//Task 2

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Untitled Document</title>
</head>
<body>
    <p id="text">I learning JavaScript events!</p>
    <div>
        <button onclick="document.querySelector('p').style.color = 'orange'
        document.querySelector('p').style.fontSize = '20px'
        document.querySelector('p').style.fontFamily = 'Gill Sans'">Change style!</button>
    </div>
</body>
</html>

//Task 3

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Untitled Document</title>
</head>
<body>
    <button id="1button">Click to make the page blue</button>
    <button id="2button">Double-click to make the page pink</button>
    <button id="3button">Click and hold to make the page brown</button>
    <a href="">Hover over to make the page yellow</a>
    <script>
        function button1() {
            document.body.style.backgroundColor = "Blue";
        }

        function button2() {
            document.body.style.backgroundColor = "Pink";
        }

        function button3() {
            document.body.style.backgroundColor = "Brown";
        }

        function unButton3() {
            document.body.style.backgroundColor = "#fff";
        }

        function on() {
            document.body.style.backgroundColor = "yellow";
        }

        function out() {
            document.body.style.backgroundColor = "#fff";
        }

        document.getElementById("1button").addEventListener("click", button1);
        document.getElementById("2button").addEventListener("dblclick", button2);
        document.getElementById("3button").addEventListener("mousedown", button3);
        document.getElementById("3button").addEventListener("mouseup", unButton3);
        document.querySelector("a").addEventListener("mouseover",on);
        document.querySelector("a").addEventListener("mouseout",out);
    </script>
</body>
</html>

//Task 4

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Untitled Document</title>
</head>
<body>
    <select>
        <option>Peter</option>
        <option>John</option>
        <option>Alise</option>
        <option>Alex</option>
        <option>Iren</option>
    </select>
    <button>Choose and delete</button>
     <script>
        function deleteSelectedElement() {
            let elementDelete = document.querySelector("select").selectedIndex;
            document.querySelector("select").querySelectorAll("option")[elementDelete].remove()
        }
        document.querySelector("button").addEventListener("click", deleteSelectedElement);
     </script>
</body>
</html>

//Task 5

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Untitled Document</title>
</head>
<body>
    <button id="liveButton">Live button</button>
    <hr>
    <script>
        document.getElementById("liveButton").addEventListener("click", function () {
            let click = document.createElement("p");
            click.innerHTML = "I was pressed";
            document.body.appendChild(click);
        })
        document.getElementById("liveButton").addEventListener("mouseon", function () {
            let mouseOn = document.createElement("p");
            mouseOn.innerHTML = "Mouse on me";
            document.body.appendChild(mouseOn);
        })
        document.getElementById("liveButton").addEventListener("mouseout", function () {
            let mouseOut = document.createElement("p");
            mouseOut.innerHTML = "Mouse is not on me";
            document.body.appendChild(mouseOut);
        })
    </script>
</body>
</html>

//Task 6

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Untitled Document</title>
</head>
<span id="width"></span>
<span id="height"></span>
<body>
    <script>
        function windowSize() {
            document.getElementById("width").innerHTML = "Width: " + window.innerWidth;
            document.getElementById("height").innerHTML = "Height: " + window.innerHeight;
        }
        windowSize();
        window.addEventListener("resize", windowSize);
    </script>
</body>
</html>

//Task 7

<select id="countries-select"></select>
<select id="cities-select"></select>

 <script>
  /*<select name="country" id="country">
	<option>Germany</option>
	<option>USA</option>
	<option>Ukraine</option>
</select>
                    
<select name="cities" id="cities"></select>
<p></p>*/

  var countriesSelect = document.querySelector('#countries-select');
  var citiesSelect = document.querySelector('#cities-select');
  var data = {
        Germany: ['Berlin', 'Keln', 'Munich'],  
        USA: ['New-York', 'Los-Angeles', 'Washington'], 
        Ukraine: ['Lviv', 'Kyiv', 'Odesa'], 
}

var countries = Object.keys(data);
addOptions(countriesSelect, countries);

var defaultCities = data[countries[0]];
addOptions(citiesSelect, defaultCities);

countriesSelect.addEventListener('change', function() {
  var cities = data[this.value];
  citiesSelect.lenght = 0;
  
  addOptions(citiesSelect, cities);
});

function addOptions(select, arr) {
  for (var i = 0; i < arr.length; i++) {
    select.add(new Option(arr[i]));
  }
}

</script>








