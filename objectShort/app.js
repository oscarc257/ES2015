// --- 1.
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  /* Write an ES2015 Version */

  const createInstructor = (firstName, lastName) => ({
    firstName,
    lastName
  });


// --- 2. 


  var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"


  /* Write an ES2015 Version */
const favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};

// --- Write a function which generates an animal object. The function should accepts 3 arguments:

// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)


const d = createAnimal("cat", "purr", "Meowww!")
// {species: "dog", bark: ƒ}
d.purr()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"


// --- Function generating an animel object
function createAnimal(cat, purr, Meowww) {
    return {
      cat,
      [purr](){
        return Meowww;
      }
    }
  }