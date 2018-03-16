// Use this object for all tests
const user = {
    name: 'Steven',
    age: 25,
    title: 'Lead Instructor',
    students: [
        { name: 'Larry', cohort: 'DM10' },
        { name: 'Jin', cohort: 'DM10' },
        { name: 'Mario', cohort: 'DM9' },
        { name: 'Bryce', cohort: 'DM10' },
        { name: 'Mackenzie', cohort: 'DM8' },
        { name: 'Chris', cohort: 'DM9' },
    ],
    addStudent(student) {
        this.students.push(students);
    },
};

// Access the name property on the user and store it in a variable called username. Use dot notation.


// Change the user's title to 'Student'. Use dot notation.


// Access the title property on the user and store it in a variable called title. Use bracket notation.


// Change the user's age to 50 and store the updated age to a variable called age. Use bracket notation.


// Loop over and log the key and value of each key/value pair in the user


// Add a new student object to the end of the students array on the user. Utilize the addStudent method to achieve this.


// Change each student with a cohort of DM10 to DM13.


/* Add an 'attributes' property to the user. It should be an object
    with the following properties:
    hairColor: 'blonde',
    eyeColor: 'hazel',
    height: 72
*/


// Change the hairColor property to brown. Use dot notation.



// Change the height to 77. Use bracket notation.



// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.



// Create a variable called alternating. Set it equal to the string bonusCategories.



/* Using bracket notation, add a bonusCategories key to your creditCard object
    using the 'alternating' variable you just created.
    Set it's value to an array of 3 items that are objects.
    Each object should have one key value pair.
    That key value pair should be the category as the key and the percent it's worth for the bonus as the value.
    (e.g. Department Stores, 5%)
    */



// Write a function called merge that will take your creditCard object and the user object as arguments and combine them into one object. Return that object /* HINT: You will need a for..in loop */



// Invoke merge and store the return value in a variable called userCC.



/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'Little Finger'],
    alive: 'Sort of',
    hunky: true
};

// Remove the hunky property from the object above
