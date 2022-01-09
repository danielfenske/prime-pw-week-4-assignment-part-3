console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;

// 1. Create a global variable named 'basket' and set it to an empty array.

let basket = [];
console.log(basket); //Statement output: [] (empty array)



// 2. Create a function called addItem. It should:
  // Take an input paramter for a string 'item'
  // Add the new item to the global array 'basket'
  // Return TRUE indiciating the item was added

  function addItem(item) {
    console.log('in addItem');
    if (isFull()){
      return false; // Will not allow item to be added to basket if # of items total more than maxItems
    } else {
      basket.push(item);  // adds item to basket array
      return true; //verifies item was added to basket
    }
  } // end addItem


// TESTING basket function
addItem('bread');
console.log('What is in the basket?', basket);
addItem('berries');
console.log('What is in the basket?', basket); //Statement output: ['bread', 'berries']



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

//NOTE: const 'maxItems' was created on line 5 for proprer initialization within addItem function.
console.log('Max items are set to', maxItems); // Statement output: 5



// 2. Create a function called 'isFull'. It should:
  // Return false if the basket contains less than the max number of items
  // Return true if the basket contains equal or more than maxItems (otherwise)

function isFull() {
  console.log('in isFull');
  if (basket.length < maxItems) {
    console.log('The basket is not full');
    return false;
  } else {
    console.log('The basket is full');
    return true;
  }
} // end isFulls


// Adding items to basket array
console.log(basket);
addItem('milk');
addItem('veggies');
addItem('bacon');
console.log(basket);

// TESTING isFull function (for false)

console.log('Is the baseket currently full?', isFull()); // Statement output: false

// Adding items to basket array

console.log('What is in the basket?', basket);
addItem('fruit');
addItem('snacks');
console.log('What is in the basket?',basket);

// TESTING isFull function (for true)

console.log('Is the basket currently full?', isFull()); // Statement output: true



// 3. Update the required addItem function to:
  // Use the isFull function to prevent more than maxItems from being added to the basket.
  // If an item was added to the array, return true.
  // If there was no room and the item could not be added return false.

// SEE ABOVE (LINE 17) FOR REVISIONS MADE TO STRETCH GOAL #3 //
  //NOTE: const 'maxItems' was created on line 5 for proprer initialization within addItem function.

// Emptying basket to test update made to addItem function

empty();
console.log('Clearing the basket', basket); //Statement output: basket it empty ([])

// Adding items to the basket to test update made to addItem function

console.log('Adding item to basket', addItem('cheese')); // Statement output: TRUE, because basket is not full
console.log('What is in the basket?', basket); // Statement output: ['cheese']

console.log('Adding item to basket', addItem('bread')); // Statement output: TRUE, because basket is not full
console.log('What is in the basket?', basket); // Statement output: ['cheese', 'bread']

console.log('Adding item to basket', addItem('carrots')); // Statement output: TRUE, because basket is not full
console.log('What is in the basket?', basket); // Statement output: ['cheese', 'bread', 'carrots']

console.log('Adding item to basket', addItem('bacon')); // Statement output: TRUE, because basket is not full
console.log('What is in the basket?', basket); // Statement output: ['cheese', 'bread', 'carrots', 'bacon']

console.log('Adding item to basket', addItem('candy')); // Statement output: TRUE, because basket is not full
console.log('What is in the basket?', basket); // Statement output: ['cheese', 'bread', 'carrots', 'bacon', 'candy']

console.log('Adding item to basket', addItem('coffee')); // Statement output: FALSE, because basket is full
console.log('What is in the basket?', basket); // Statement output: ['cheese', 'bread', 'carrots', 'bacon', 'candy']



// 4. Create a function called removeItem. It should:
  // Take an input parameter for a string item
  // Use Array.indexOf to find the index of the first matching item in the basket
  // Use Array.splice to remove the first matching item from the basket
  // Return the item removed or 'null if the item was not found'
