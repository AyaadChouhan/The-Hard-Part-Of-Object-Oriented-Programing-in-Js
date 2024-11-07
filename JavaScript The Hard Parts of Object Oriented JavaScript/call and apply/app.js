// we have another way of running a funciton that allow us to control the assignment of this
const obj = {
    num:3,
    increment : function(){
        this.num++
    }   
}
const obj2 = {
    num:10
}
obj.increment() // obj.num  now = 4;

obj.increment.call(obj2); // otherObj.num now 11 
// obj.increment.apply(obj2)