
// Example
// Create an array of 5 friends
function partOneA () {
  let friends = [];
  // 1. Add your friends to the array
  friends[0] = "Andy";
  friends[1] = "Betty";
  friends[2] = "Cathy";
  friends[3] = "Danna";
  friends[4] = "Edward";

  // 2. write your friends to the message
  messageParagraph.innerHTML = `Your friends are ${friends[0]}, ${friends[1]}, ${friends[2]}, ${friends[3]}, and ${friends[4]}.`;

}

// Try It!
function partOneB () {
//  alert("Try it!");
  let friends 
  friends = [];
  // 1. TODO: Add your own friends to the array
  friends[0] = "Alex";
  friends[1] = "Tisha";
  friends[2] = "Cindy";
  friends[3] = "Brenda";
  friends[4] = "Toya";
  friends[5] = "vicky";

  // 2. TODO: write your friends to the message
messageParagraph.innerHTML = `My top friends are ${friends[0]}, ${friends[1]}, ${friends[2]}, ${friends[3]}, ${friends[4]} and ${friends[5]}.`;
}

// Example
// use += to add to the message
function partTwoA () {
  let friends = [];
  // 1. Add your friends to the array
  friends[0] = "Andy";
  friends[1] = "Betty";
  friends[2] = "Cathy";
  friends[3] = "Danna";
  friends[4] = "Edward";


  // 2. write your friends to the innerHTML of the document
  messageParagraph.innerHTML = "Your friends are ";
  messageParagraph.innerHTML += `${friends[0]}`;
  messageParagraph.innerHTML += `, ${friends[1]}`;
  messageParagraph.innerHTML += `, ${friends[2]}`;
  messageParagraph.innerHTML += `, ${friends[3]}`;
  messageParagraph.innerHTML += `, ${friends[4]}`;

}

// Try it!
function partTwoB () {
  let friends = [];
  // 1. Add your friends to the array
  friends[0] = "Alex";
  friends[1] = "Tisha";
  friends[2] = "Cindy";
  friends[3] = "Brenda";
  friends[4] = "Toya";
  friends[5] = "vicky";
  // 2. write your friends to the innerHTML of the document
messageParagraph.innerHTML = "My friends are";
messageParagraph.innerHTML += ` ${friends[0]}`;
messageParagraph.innerHTML += `, ${friends[1]}`;
messageParagraph.innerHTML += `, ${friends[2]}`;
messageParagraph.innerHTML += `, ${friends[3]}`;
messageParagraph.innerHTML += `, ${friends[4]}`;
messageParagraph.innerHTML += `, ${friends[5]}`;


}

// Example
// add more friends from the prompt
function partThreeA () {
  // 1. prompt for a friend
  let friend = prompt("Enter a friend's name.");

  // 2. add the friend to the message
  messageParagraph.innerHTML += `, ${friend} `;
}

// Try it!
// Try prompting for a friend with a slightly different prompt or writing the message in a slightly different format.
function partThreeB () {
  // 1. prompt for a friend
  let friend = prompt("Enter name of New Friend.")

  // 2. add the friend to the message
  messageParagraph.innerHTML += `and ${friend}` + ` has been added to your Friends List.`;
}

// Example
// Keep all the friends in an array, too.
let myBestFriends = [];
function partFourA () {
  let totalBestFriends, newBestFriends;
  totalBestFriends = myBestFriends.length;
  // 1. prompt for a friend
  newBestFriends = prompt(`You have ${totalBestFriends} best friends. To add another, enter a friend's name.`);

  // 2. add the friend to the array with push()
  myBestFriends.push(newBestFriends);

  // 3. add the friend to the message
  // Note: you can use HTML in the string to create HTML elements in the document. 
  messageList.innerHTML += `<li>${newBestFriends}</li>`;

  // 4. log the array to the console for debugging
  // Note: This will show in the Dev Tools
  console.log(myBestFriends);
}

// Try it!
// Now ask the user to enter their favorite ice cream flavors.
let myFavFlavors = [];
function partFourB () {
  alert("Try it!");
  let totalFavFlavors, newFavFlavors;
  totalFavFlavors = myFavFlavors.length;

  // 1. prompt for a flavor
  myFavFlavors = prompt(`There are ${totalFavFlavors} favorit flavors. Enter a new favorit flavor to add another.`);

  // 2. add the flavor to the array with push()
  myFavFlavors.push(newFavFlavors);

  // 3. add the flavor to the message
  messageParagraph.innerHTML += `<li>${newFavFlavors}</li>`+ `has been added to the Inventory List`;

  // 4. log the array to the console for debugging
  console.log(myFavflavors);

}


