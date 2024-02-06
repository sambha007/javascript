// javascript and classes
//javacript is prototype-based language 
/*oop= object
-collection of properties and methods
-toLowerCase
-
#parts of oop
Object literal
-constructer function
-prototype
-classes
-instances(new,this)

## 4 pillars
---abstraction
---encapsulation
---inheritance
---polymorphism

*/

const user={
    username:'sagar mote',
    logincount:6,
    sin:true,
    getUserDetails :function(){
       console.log('got user details from database');
       console.log(this.username);
       console.log(this);
    }
}
console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

//const promiseOne=new Promise()
//const date =new Date()
function userOne(username,loginCount,isLoggedIn) {
    this.username=username;
    this.logincount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this;
    
}

const one=new userOne('sagar',8,'true');
const two=new userOne('sagar',8,'true');
console.log(one,two);