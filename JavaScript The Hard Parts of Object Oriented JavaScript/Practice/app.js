{
  const obj = {
    firstName: "shahid",
    lastName: "Hashmi",
    fullNmae: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  // console.log(obj.fullNmae())
}

{
  let obj = {
    firstName: "shahid",
    lastName: "Hashmi",
  };
  for (const keys in obj) {
    console.log(keys);
    console.log(obj[keys]);
  }
}


{
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 4, c: 5, b:3 };

    const obj3 = Object.assign(obj1,obj2); // it's also removing the duplicate values
    console.log(obj3)
}

// Object.defineProperties()

{
    const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);
// Expected output: 42
console.log(object1)
}


{
    const obj1 = {
        a: "Apple",
        b: "Ball",
        c: "Coding"
    }
    for(const [key, value] of Object.entries(obj1)){
        console.log(value)
    }
    const map = new Map(Object.entries(obj1));
    console.log(map);
}

{
  const obj = {
    prop: 42,
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
}

{
  // fromEntries
  const entries = new Map([
    ['a',"Apple"],
    ['b',42] 
  ]);
  const obj = Object.fromEntries(entries);
  console.log(obj)
}

{
  //  Object.getOwnPropertyNames()

  const obj1 = {
    a: "Apple",
    b: "Ball",
    c: "Coding"
}
    console.log(Object.getOwnPropertyNames(obj1))
    console.log(Object.getOwnPropertyNames('hi')) // [0,1,length]

}

{
  let obj = {
    name:"shaid"
}
  const obj2 = Object.create(obj);
  obj2.lastName = "hashmi"
  const obj3 = {};
  obj3.fullName = "shahid hashmi"
  Object.setPrototypeOf(obj3, obj2)
  console.log(Object.hasOwn(obj3, "lastName")) // no inheritence taking
  console.log(Object.getPrototypeOf(obj))
}


{
  // Object.hasOwn() ..... We can use hasOwnProterty()
  const obj = {
    proterty: "Exists"
  }
  console.log(Object.hasOwn(obj,'proterty')) // true
//  The Object.hasOwn() method returns true if the specified property is a direct property of the object — even if the property value is null or undefined
const obj2 = {};
obj2.proterty = null;
console.log(Object.hasOwn(obj2, "proterty"))
}


{
  // Object.hasOwnProperty() .... It will avoid Null and undefined values
  const obj = {
    property: "Exists"
  }
  console.log(obj.hasOwnProperty("property"))
}


{
  // Object.isExtensible()
  const object1 = {};
  // Object.freeze(object1) 
  // Object.preventExtensions(object1)
  console.log(Object.isExtensible(object1)) // it will through an false If the object1 is freeze 
}

{
  let myObject = {
    name: 'John',
    age: 25,
  };
  
  // Seal the object
  Object.seal(myObject);
  
  // Try to add a new property (won't work)
  myObject.city = 'New York';
  
  // Try to delete a property (won't work)
  delete myObject.age;
  
  // Modify an existing property (works)
  myObject.age = 26;
  
  // Logging the object
  console.log(myObject);
  
}