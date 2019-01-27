/*Create an input field in your DOM. Give it an id of message.
Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
Give each article a different border color.
Write an event listener that listens for the keyup event on the input field.
The event handler function should update the textContent property of both sections.*/


const inputEl = document.getElementById("message")
const redBoxEl = document.getElementById("redBox")
const blueBoxEl = document.getElementById("blueBox")

const addTextToClasses = (event) =>{
    redBoxEl.innerHTML =  event.target.value
    blueBoxEl.innerHTML =  event.target.value
}

inputEl.addEventListener("keyup", addTextToClasses)
