/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
function menuMaker(inputArray){
  //select existing elements
  const menuButton = document.querySelector(`.menu-button`);

  //make new elements
  const menu = document.createElement('div');
  const unordered = document.createElement('ul');

  //make list items from array
  inputArray.forEach(element => {
    let newItem = document.createElement('li');
    newItem.textContent = `${element}`;
    unordered.appendChild(newItem);
  });
  //Assign Classes
  menu.classList.add(`menu`);

  //Events
  menuButton.addEventListener("click",(event) => {
    menu.classList.toggle('menu--open')
  });
  menu.appendChild(unordered);
  return menu;
}
const header = document.querySelector(`.header`);
header.appendChild(menuMaker(menuItems));
/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
