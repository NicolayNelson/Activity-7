// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.
"use strict";
let balloon = document.getElementById("balloon");
let currentSize = 100;

window.addEventListener("keydown", event => {
  if (event.key == "ArrowUp") {
    event.preventDefault();
    currentSize *= 1.1;
    balloon.style.fontSize = currentSize + "%";
  } else if (event.key == "ArrowDown") {
    event.preventDefault();
    currentSize *= 0.9;
    balloon.style.fontSize = currentSize + "%";
  }
});


// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it.


// const tabs = document.getElementById("tabbed-layout");
// const panels = document.getElementsByTagName("tabbed-contents");
// tabs.addEventListener('click'.function(e));{
//   if(e.target.tagName == "LI"){
// const targetPanel = document.getElementById("tab1Link");
// panels.forEach(function(panel) {
//   if (panel == targetPanel){
//     panel.classList.add('active');
//   } else {
//     panel.classList.remove('active');
//   }
// })

//I tried for hours and just cant understand this i watched video after video each saying a different thing
// I do not understand the HTML and while i did not have to write any HTML i did not understand how to ead it.
// I put my last attempt up before submitting because i will have ran out of time and i would like something
//instead of a zero on the grade.