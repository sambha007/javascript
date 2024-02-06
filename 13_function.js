function myfunc() {
    console.log("jay shree ram");
    
}

myfunc();

function addtwo(number1,numbe2)
{
    console.log(number1+numbe2);
    let res=number1+numbe2;
    return res;
}
let ans=addtwo(33,66);
console.log(ans);

function login(user){
    if(user===undefined)
    {
        console.log("enter yoser name");
    }
    return `${user} just logged in`
}

console.log(login("sambha"));
console.log(login());

function calculate(...num)
{
    return num;
}
console.log(calculate(200,300,4000));
