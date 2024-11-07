function UserCreater(name, score){
    this.name = name
    this.score = score
}

UserCreater.prototype.information = function(){
    console.log(this.name);
}
UserCreater.prototype.increment = function(){
    this.score++
}



let user1 = new UserCreater("sarjan", 6)



// ============================

function paidUserCreater(paidName,paidScore,acoountBalace){
    userCreater.call(this,paidName,paidScore)
    this.acoountBalace = acoountBalace

}

paidUserCreater.prototype = Object.create(UserCreater.prototype);

paidUserCreater.prototype.increseAmount = function(){
    this.acoountBalace++
}

const paidUser1 = new paidUserCreater("shahid",8,3);
paidUser1.increseAmount()