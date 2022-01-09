console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// 1. Create a global variable named 'basket' and set it to an empty array.

let basket = [];
console.log(basket); //Statement output: [] (empty array)



// 2. Create a function called addItem. It should:
  // Take an input paramter for a string 'item'
  // Add the new item to the global array 'basket'
  // Return TRUE indiciating the item was added

function addItem(item) {
  console.log('in addItem');
  basket.push(item); // adds item to basket array
  return true; //verifies item was added to basket
} // end addItem


// TESTING basket function
addItem('bread');
console.log(basket);
addItem('berries');
console.log(basket); //Statement output: ['bread', 'berries']



// 3. Create a function called 'listItems'. It should:
  // Loop over the items in the basket array
  // Console.log each individual item on a new line

function listItems() {
  console.log('in listItems');
  for (let i=0; i<basket.length; i++) {
    console.log(basket[i]);
  }
} // end listItems


// TESTING basket function
listItems(); // Statement output: items in basket logged on separate lines ('bread', 'berries')
