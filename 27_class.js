//ES6

class User{

    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai =new User("chai","chai@gjh","123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

function user(username,email,password) {
    this.username=username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptPassword=function () {
    return `${this.password}abc`
    
}
User.prototype.changeUsername=()=>{
    return `${this.username}`
}
const tea=new User('tea','sam@as','789')
console.log(tea.encryptPassword());
console.log(tea.changeUsername());