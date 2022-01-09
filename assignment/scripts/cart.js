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
  for (let i=0; i<basket.length; i++) { // Loops through basket array
    console.log(basket[i]); // Logs to console values within basket array (items)
  } // end loop
} // end listItems


// TESTING listItems function
listItems(); // Statement output: items in basket logged on separate lines ('bread', 'berries')



// 4. Create a function called 'empty'. It should:
  // Reset the basket to an empty array

function empty() {
  console.log('in empty');
  while (basket.length > 0) { // Continues to run as long as values (items) exist in basket
    basket.pop(); // Removes an item from the basket each time while loop is run
  } // end while loop
} // end empty


// TESTING empty function
empty();
console.log(basket); // Statement output: [] (basket is now empty)


// STRETCH GOALS //

// 1. Add a global const named 'maxItems' and set it to 5.

const maxItems = 5;
console.log(maxItems); // Statement output: 5
