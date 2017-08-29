// Create an object called user that has name, age, password properties and assign them appropriate values.

var user = {
    
 name: "Russell",
 age:29,
 password: "yourmomma"

    
};// Code Here



// Add an email and username, as well as a method called alertUser that alerts the users name, to your user object using dot notation.

user.email = "russell.bwright@yahoo.com" 
user.username = "buckks" // Code Here



// Now loop over your user object and alert each of the keys.

function loop(obj){
    for (var key in obj){
        alert([key]);
    }
}

loop(user);// Code Here



// Now loop over your user object and alert each of the values for each key.

function loop(obj){
    for (var key in obj){
        alert(obj[key]);
    }
}

loop(user);// Code Here



// Remove the username from your user object

delete user.username;// Code Here



// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.

var creditCard = {
    number: 4566720037221690,
    cvc: 656,
    type: "Mastercard",
    Limit: 10000
}// Code Here



// Create a variable called alternating. Set it equal to the string bonusCategories.

var alternating = "bonusCategories"// Code Here



/* Using bracket notation, add a bonusCategories key to your creditCard object using 'alternating'.
    Set it's value to an array of 3 items that are objects. 
    Each object should have one key value pair. 
    That key value pair should be the category as the key and the percent it's work for the bonus as the value.
    (e.g. Department Stores, 5%) 
    
    Using dot notation add another key to your object called 'bank' with the value being an object with 2 keys,
        the bank name, and the bank address.
    
    */

creditCard[alternating] = [{Gas: "2%"}, {Cashback: "3%"}, {food: "4%"}]
creditCard.bank = {name: "Mobile Oil", address: "S Main St"};// Code Here



// Write a function that will take your creditCard object and user object as arguments and combine them into one object. /* HINT: You will need a for..in loop */

function add(obj1, obj2){
var newObj = {};
 for (var key in obj1){
        newObj[key] = obj1[key];
 }   

 for (key in obj2){
    newObj[key] = obj2[key];
 }
   return newObj;
    
}// Code Here
add(user, creditCard);

/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'LittleFinger'],
    alive: 'Sort of',
  };

function looper(obj){


for (i=0; i < obj.allies.length; i++){
    if (obj.allies[i] === "LittlerFinger"){
        obj.allies[i] = "Dragon Lady";
    }
}
obj.alive = "More Than Ever";

return obj;

}  // Code Here

looper(obj)
  
