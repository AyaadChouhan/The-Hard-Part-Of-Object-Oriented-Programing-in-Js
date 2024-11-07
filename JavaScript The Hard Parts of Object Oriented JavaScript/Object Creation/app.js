/*
// let's suppose we're building a quiz game with user

 SOME OF OUR USER 

    Name : Phil
    Score : 4 
    
    Name : Julia
    Score : 5

    Functionality 
    ~ Ability to increase score
    
1. To Store this data in proper manner, we'll use object; 
2. or we can say we have to store this data in bundle 
*/

{
    let obj = {
        Name : Phil,
        Score : 4,
        increment : function (){
            obj.Score++
        }

    }
    obj.increment
}

// 2. Creating obj using 'Dot notation'.

{
    let obj = {}; //  Creating an empty object

    obj.name = 'shahid hashmi';
    obj.score = 4;
    obj.increment = function(){
        obj.score++
    }

    // This is also a way to create a object
}



// 3.  Object.create()

// 1. This is  build in method, and is used for creating objects with a specified prototype object

// When you create an object using `Object.create()`, the newly created object inherits properties from the specified prototype object, but it  automatically return an empty object.

{
    let obj = {}; //  Creating an empty object

    obj.name = 'shahid hashmi';
    obj.score = 4;

    let newObject = Object.create(obj) // as we can see we are passing obj in newObject but when we log it will retrun empty object because the obj we paased in, is herit in newObject in by reference prototype so we can access the property by adding property name after newObject like this  newObject.name
}


//  4. Generator object using a function 
{
    function usercreater(name,score){
        let newUser = {};
        newUser.name = name;
        newUser.score = score;
        newUser.increment = function(){
            newUser.score++
        }
        return newUser
    };
    const user1 = usercreater('shahid',5);
    const user2 = usercreater('hashmi',7);
    user1.increment()

    //  this will return a new object but...hmmm..🤔  everytime we create new variable and assign usercreater() this will always retrun increment function as well soo the problem is every user variable has increment function and it will inpect our performance so what we goona do now?

    function usercreater2(name,score){
        let newObject = Object.create(userFunctionStore);
        newObject.name = name;
        newObject.score = score;
        return newObject
    }
    const userFunctionStore = {
        increment : function (){
            this.score++
        }
    }
    let newUser = usercreater2('shahid',3);
    newUser.increment

    
   
}