
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
  alert("Try it!");
  let friends 
  friends = [];
  // 1. TODO: Add your own friends to the array
  friend[5] = "Alex";
  friend[6] = "Tisha";
  friend[7] = "Cindy";
  friend[8] = "Brenda";
  friend[9] = "Toya";

  // 2. TODO: write your friends to the message
messageParagraph.innerHTML = `My top friends are ${friend[5]}, ${friend[6]}, ${friend[7]}, ${friend[8]}, and ${friend[9]}.`;
}

// Example
// use += to add to the message
function partTwoA () {
  let friends = [];
  // 1. Add your friends to the array
  friend[0] = "Andy";
  friend[1] = "Betty";
  friend[2] = "Cathy";
  friend[3] = "Danna";
  friend[4] = "Edward";
  friend[5] = "Alex";
  friend[6] = "Tisha";
  friend[7] = "Cindy";
  friend[8] = "Brenda";
  friend[9] = "Toya";

  // 2. write your friends to the innerHTML of the document
  messageParagraph.innerHTML = "Your friends are ";
  messageParagraph.innerHTML += `${friend[0]}`;
  messageParagraph.innerHTML += `, ${friend[1]}`;
  messageParagraph.innerHTML += `, ${friend[2]}`;
  messageParagraph.innerHTML += `, ${friend[3]}`;
  messageParagraph.innerHTML += `, ${friend[4]}`;

}

// Try it!
function partTwoB () {
  let friends = [];
  // 1. Add your friends to the array
  friend[5] = "Alex";
  friend[6] = "Tisha";
  friend[7] = "Cindy";
  friend[8] = "Brenda";
  friend[9] = "Toya";

  // 2. write your friends to the innerHTML of the document
messageParagraph.innerHTML = "My friends are";
messageParagraph.innerHTML += `, ${friend[5]}`;
messageParagraph.innerHTML += `, ${friend[6]}`;
messageParagraph.innerHTML += `, ${friend[7]}`;
messageParagraph.innerHTML += `, ${friend[8]}`;
messageParagraph.innerHTML += `, ${friend[9]}`;


}

// Example
// add more friends from the prompt
function partThreeA () {
  // 1. prompt for a friend
  let friend = prompt("Enter a friend's name.");

  // 2. add the friend to the message
  messageParagraph.innerHTML += `, ${friend}`;
}

// Try it!
// Try prompting for a friend with a slightly different prompt or writing the message in a slightly different format.
function partThreeB () {
  // 1. prompt for a friend
  let friend = prompt("Enter name of New Friend.")

  // 2. add the friend to the message
  messageParagraph.innerHTML += `Party at my house: July 4th. ${friend}`;
}

// Example
// Keep all the friends in an array, too.
let myBestFriends = [];
function partFourA () {
  let totalBestFriends, newBestFriend;
  totalBestFriends = myBestFriends.length;
  // 1. prompt for a friend
  newBestFriend = prompt(`You have ${totalBestFriends} best friends. To add another, enter a friend's name.`);

  // 2. add the friend to the array with push()
  myBestFriends.push(newBestFriend);

  // 3. add the friend to the message
  // Note: you can use HTML in the string to create HTML elements in the document. 
  messageList.innerHTML += `<li>${newBestFriend}</li>`;

  // 4. log the array to the console for debugging
  // Note: This will show in the Dev Tools
  console.log(myBestFriends);
}

// Try it!
// Now ask the user to enter their favorite ice cream flavors.
let myFavFlavors = [];
function partFourB () {
  alert("Try it!");
  let totalFavFlavors, newFavFlavor;
  totalFavFlavors = myFavFlavors.length;

  // 1. prompt for a flavor
  myFavFlavors = prompt(`There are ${totalFavFlavors} favorit flavors. Enter the new favorit flavor to add another.`);

  // 2. add the flavor to the array with push()
  myFavFlavors.push(newFavFlavor);

  // 3. add the flavor to the message
  messageParagraph.innerHTML = `<li>${newFavFlavor}</li>`;

  // 4. log the array to the console for debugging
  console.log(newFavFlavor);

}

