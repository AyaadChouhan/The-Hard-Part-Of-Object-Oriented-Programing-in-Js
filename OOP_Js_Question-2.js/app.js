// Basic Class and Object Creation:
// Define a class Book with properties title, author, and year. Create an instance of this class and print the details of the book.
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

// Method Definition:

// Extend the Book class by adding a method getSummary() that returns a string containing the book's title and author. Create an instance and call this method
Book.prototype.getSummary = function name() {
  console.log(this.title, this.author, this.year);
};
const myData = new Book("Js", "###", 2024);
console.log(myData);

// ====================================
// Inheritance:

// Create a base class Vehicle with properties make and model, and a method start(). Then create a derived class Car that adds a property year and overrides the start() method. Demonstrate how inheritance works by creating instances and calling their methods.
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    console.log(this.make, this.model);
  }
}
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model);
    this.year = year;
  }
  start() {
    super.start();
    console.log(this.year);
  }
}

const data1 = new Car("tata", "nixon", 2020);
data1.start();

// ============================================
// Static Methods:

// Define a class MathUtils with a static method add(a, b) that returns the sum of a and b. Demonstrate the use of this static method without creating an instance of the class.
class Animal {
  speak() {
    console.log("Animal sound");
  }
}
class cat extends Animal {
  //   super.speak()
}
class Dog extends Animal {}
const data2 = new cat();
data2.speak();

// ===========================
// Static Methods:

// Define a class MathUtils with a static method add(a, b) that returns the sum of a and b. Demonstrate the use of this static method without creating an instance of the class.
class Mathutils {
  static add(a, b) {
    return a + b;
  }
}
// const data3 = new Mathutils();
console.log(Mathutils.add(2, 3)); //in static method me cannot access method by data3 varieble but now we can use the class name which is Mathutile

// ==================================================
// Constructor Overloading (through Default Parameters):

// Define a class Person with a constructor that takes name and age, but provide a default value for age. Show how to create instances with and without the age parameter.
class Person {
  constructor(name) {
    this.name = name;
    this.age = "22";
  }
}
const data4 = new Person("ayaad");
console.log(data4.age);

// ==============================================
// Composition:

// Define a class Engine with properties type and horsepower. Then create a class Car that has an instance of Engine as a property. Show how composition can be used by creating a car with a specific engine.
class Engine {
  constructor(type, horsepower) {
    this.type = type;
    this.horsepower = horsepower;
  }
}
class car {
  constructor(make, model, Engine) {
    this.make = make;
    this.model = model;
    this.Engine = Engine;
  }
  print() {
    console.log(
      this.Engine.type,
      this.Engine.horsepower,
      this.model,
      this.make
    );
  }
}
const data5 = new Engine("SportsCar", 800);
const data6 = new car("Farrari", "#", data5);
data6.print();

// ====================================
// Operator Overloading (via Method Overloading):

// JavaScript does not support operator overloading directly, but you can overload methods to simulate similar behavior. Create a class Vector with properties x and y, and a method add(vector) that returns a new vector by adding the corresponding properties. Demonstrate this by adding two vectors.
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }
  tostring() {
    console.log(this.x, this.y);
  }
}
const victor1 = new Vector(1, 2);
const victor2 = new Vector(3, 4);

const result = victor1.add(victor2);
console.log(result);
result.tostring();


// ================================
// Abstract Class and Method:

// Simulate an abstract class Shape (since JavaScript doesn’t have true abstract classes) with a method area(). Create derived classes Circle and Rectangle that implement the area() method. Demonstrate abstraction by creating instances and calling area().
class Shape{
  area(){
    return  "hello";
  }
}
class Circle extends Shape{
 constructor(radius){
  super()
  this.radius = radius;
 }
 area(){
  return  Math.PI * this.radius * this.radius;
 }
}

class Rectangle extends Shape{
  constructor(width, height){
    super()

    this.width = width;
    this.height = height;
  }
  area(){
    return this.width * this.height
  }
}

const circle = new Circle(5)
const rectangle = new Rectangle(4,6)
console.log(rectangle.area());
console.log(circle.area());