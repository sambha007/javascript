 let a=300;
if(true){
    let a=400;
    console.log("inner in if ",a);

}
console.log("out side ",a);

console.log(addone(10));
function addone(num)
{
    return num+2

}

//console.log(addtwo(20));

const addtwo=function(num)
{
    return 10+num;
}
console.log(addtwo(20));