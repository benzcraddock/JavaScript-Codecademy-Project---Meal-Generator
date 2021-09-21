// create empty menu object and add _courses property to menu and set value as empty object for mapping between each course and dishes available to order in course.
// create three properties inside _courses with empty array. create getter and setter methods for properties. inside menu, create an empty getter method for _courses.
// inside courses getter method, return object that contains key/value pairs for three properties. In other words, return object with properties for appetizers, mains, desserts (contains an array).
// create method .addDishToCourse() to add new dish to specified course on menu, takes in three parameters. method should create object dish which has name and price which it gets from parameters (dishName, dishPrice). Push dish object into appropriate array in men's _courses object based on what courseName was passed in.
// create method getRandomDishFromCourse() with one parameter courseName to generate a random meal.
// retreve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes. generate a random index by multiplying Math.random() by the length of the dishes array (This will guarantee that the random number will be between 0 and the length of the array). round that generated number to a whole number by using Math.floor() on the result. return the dish located at that index in dishes.
// create .generateRandomMeal() function which will automatically generate a three-course meal for us with no parameters. function should create an appetizer variable which should be the result of calling the getRandomDishFromCourse() method when we pass in an appetizers string to it. create a main variable and dessert variable the same way you created the appetizer variable, but make sure to pass in the right course type. calculate the total price and returns a string that contains the name of each of the dishes and the total price of the meal, formatted as you like.
// create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function.
// generate meal using .generateRandomMeal() function on menu, save it to variable meal. print meal vaariable to console.
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers () {
    return this._courses.appetizers;
  },
  set appetizers(appetizersIn) {
    this._courses.appetizers = appetizersIn;
  },
  get mains () {
    return this._courses.mains;
  },
  set mains (mainsIn) {
    this._courses.mains = mainsIn;
  },
  get desserts () {
    return this._courses.desserts;
  },
  set desserts (dessertsIn) {
    this._courses.desserts = dessertsIn;
  },
  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is $${totalPrice}.`
  }
};

menu.addDishToCourse('appetizers', 'Soup', 9.25);
menu.addDishToCourse('appetizers', 'Wings', 11.00);
menu.addDishToCourse('appetizers', 'Salad', 9.50);

menu.addDishToCourse('mains', 'Hamburger', 22.00);
menu.addDishToCourse('mains', 'Salmon', 26.50);
menu.addDishToCourse('mains', 'Grilled Chicken', 23.25);

menu.addDishToCourse('desserts', 'Icecream', 8.00);
menu.addDishToCourse('desserts', 'Cheesecake', 12.00);
menu.addDishToCourse('desserts', 'Chocolate Cake', 12.50);

let meal = menu.generateRandomMeal();
console.log(meal);