//if statement
//What does this alert?
var price = 8.76;
if(price <= 0 && price >= 5 && price==8.75){
    alert("a");
} 

-----------

//if-else statement
//What does this alert?
var price = 8.76;
if(price <= 0 || price >= 5){
    alert("a");
} else {
    alert("b");
}

-----------

//nested if-else if-else statements
//What does this alert?
var letter = "c";
if(letter == "d" || letter == "o" || letter == "g"){
    alert("1");
} else if (letter != "c" || letter != "a" || letter == "t"){
    alert("2");
} else if (letter == "c" || letter == "m"){
    alert("3");
} else {
    alert("4");
}

//What's the difference between what's above and doing:
var letter = "c";
if(letter == "d" || letter == "o" || letter == "g"){
    alert("1");
} 

if (letter != "c" || letter != "a" || letter == "t"){
    alert("2");
} 

if (letter == "c" || letter == "m"){
    alert("3");
} else {
    alert("4");
}

-----------

//Write a function multiply that multiplies three numbers if all the numbers are greater than or equal to 5; if any of the numbers are less than 5, then set result to be -1, and alert result afterwards

//To start, create a global variable and set it to 0:
var result = 0;
function multiply(num1, num2, num3){
    if(num1>=5 && num2>=5 && num3>=5){
        result = num1*num2*num3;
        alert(result);
    }else{
        result = -1;
        alert(result);
    }
}

var answer = prompt("What is the first number you want to multiply?");
var answer2 = prompt("What is the first number you want to multiply?");
var answer3 = prompt("What is the first number you want to multiply?");
multiply(answer,answer2,answer3);
multiply(2,2,2);
multiply(6,10,1);
//Do we have to call the function?

-----------

//Make an HTML button, and on the click of the button, alert how many times the button has been clicked (write a function)

<body>
    <button onclick="countClicks()">Click me!</button>
    <script>
        var numClicks = 0;
        function countClicks(){
            numClicks++;
            alert(numClicks);
        }
    </script>
</body>

-----------

//for loops
var number = 0;
for(var i=0; i<5; i++){
    number = number + i;
    number = number + 2;
}
//what does number equal at the end of this? alert it!

-----------

//How do we make an array that contains all the letters a-z?
//After we make this array, how do we print out all the letters backwards from z to a?

//forwards
var alphabetArr = new Array("a","b","c","d","e"...);
for(var i=0;i<alphabetArr.length;i++){
    document.write(alphabetArr[i]);
}

//backwards
for(var i=alphabetArr.length;i>=0;i--){
    document.write(alphabetArr[i]);
}



-----------

//Debugging - What is wrong?
//Example 1:
var test = false;
if(test == true){
    alert("I am outside the else block");
} else {
    alert("I am inside the else block");
}

-----------

//Variable tracing
//Example 2:
var b = 2;
var c = 1;
c = b++;
c--;
b = 10 + c;
What are the values of b and c?

-----------

//Example 3:
var n = 5;
var sum = 0;
var digit = 0;
for(var i=0; i<4; i++){
    if(n>2){
        digit = 2;
    } else {
        digit = 3;
    }
    sum = sum + digit;
    n--;
}
alert(sum);

//GOOD LUCK ON THE EXAM!
