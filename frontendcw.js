// As the User types, make it so they always enter a set sentence no matter what letters they actually type (each to the User presses a key, your JavaScript should add the next character from your hardcoded sentence to the textarea just as if they typed it).


var btn = document.getElementById('typer');

let thisSent_idx = 0;
let thisSent_list =["I hope this sentence works!", " I hope this sentence.", " I hope this.", " I hope.", " I"];


btn.onkeydown = function(e)
{
   btn.value+=thisSent_list[thisSent_idx];
    thisSent_idx++;
    console.log(thisSent_list);
    e.preventDefault();
};


// When the User clicks the reset button, any text already in the textarea should be cleared/erased

var btn2 = document.getElementById("reset");
btn2.onclick = function()
{
    btn.value = ""
};
