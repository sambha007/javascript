const user={
    n:"ambhaji",
    age:22,
    myfun:function()
    {
        console.log(`user name is ${this.n} and his/her age is ${this.age}`);
    }
}

user.myfun()
user.n="sambhaji"
user.myfun()

const chai=()=>{
    name:"sambha",
    console.log(this.name);

}

function one(){
    name:"shinde",
    console.log(this);
}

//one()
chai()

const addtwo=(num1,num2)=>(num1+num2);
console.log(addtwo(20,30));
//immeditely invoked function Expressions

(
    function z(){
        console.log("iife");
    }
)();

(
    (name)=>{
        console.log(`db connected iife function ${name}`);
    }
)("it can call directly")

