let count = 0;
let countel = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
console.log(count)
let welcomeEl = document.getElementById('welcome-el')
let name = "Kalyan"
let greeting = 'Hello ' + name + ' Good Morning, Have a nice day'
welcomeEl.textContent = greeting

function increment(){
    count++;
    countel.textContent = count;
    console.log(count)
    console.log("Clicked")
}

function save(){
    let countStr = count;
    saveEl.textContent += countStr + " - "
    countel.textContent = 0
    count = 0;
}

let errorEl = document.getElementById('errorpara')
let errormsg = "Error, Please try again later!"
function purchase(){
    errorEl.textContent = errormsg
}