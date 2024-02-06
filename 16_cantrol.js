// if
//let a=prompt("enter number")
console.log("enetr value");
//let a=prompt();
// ==,!=,>,<,&&,||,=== ,>=,<=
a=3
if(a==5){
    console.log("is five");

}
else if(a==4)
{
    console.log("is four ");
}
else
{
     console.log("is not five nor four ");
}

const balance=1000;
if(balance>500)console.log("yes");

switch(a)
{
    case 1:
        break;
    case 2:
        break;
    case 3:
        console.log("yessss");
        break;
default:
    console.log("ye nhi karna tha be");
    break;

}
// false ,0,-0,bigInt 0n," ",null,undefined ,NaN

//tuth value
//"0",'false',"",[],{},function(){}
const obj={

}
if(Object.keys(obj).length===0)
{
    console.log("object is empty ");
}

// nullish coalecing operator (??)

let val;
val=5??10;
console.log(val);
let val2;
val2=null??15;
console.log(val2);


// terniary operator
//condtion ?true:false;
let p=100;
p==100?console.log("yes"):console.log(no);





