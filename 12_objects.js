//object literals
//object.create
const mysymbol=Symbol("key1")


const jsuser={
    name:"sambha",
    email:"sam@gaiml.com",
    [mysymbol]:"key2",
    age:22,
    islog:"false",
    "full name":"bhausaheb shinde ",
    lastcity:["pune","lonavala"]
}
console.log(jsuser.name);
console.log(jsuser["full name"]);
console.log(jsuser["age"]);
console.log(jsuser[mysymbol]);

jsuser.age=23
Object.freeze(jsuser)
jsuser.age=21
console.log(jsuser);

jsuser.greeting= function(){
    console.log("hello how are you");
}
jsuser.ff= function(){
    console.log(`hello js user , ${this["full name"]}`);
}

//console.log(jsuser.greeting());
//console.log(jsuser.ff());

///// part 2 *************************


//object singlecton
const tinder= new Object()

tinder.id="123abc"
tinder.name="sammy"
tinder.is=false
tinder.age=22
console.log(tinder);

const myobj={
    obj1:{
        boj2:{
            obj3:{
                name:"sambhaji",
                last:"shinde"

            }
        }
    }

}
console.log(myobj);
console.log(myobj.obj1);
console.log(myobj.obj1?.boj2.obj3.name);

const objx={1:'a',2:'b'}
const objy={3:'c',4:'d'}
const objz={objx,objy}
console.log(objz);
const obja=Object.assign({},objx,objy)
console.log(obja);

///******************************
 
const course={
    name:"sambha",
    age:22,
    courseinstructor :"shinde"

}
const{courseinstructor:sir}=course
console.log(sir);



