const des=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(des);
console.log(Math.PI=5);
Math.PI=5;
console.log(Math.PI);

const ob={
    username:"sambhaji",
    id:420,
    work:'it compony '
}
console.log(ob);
console.log(Object.getOwnPropertyDescriptor(ob,'id'));
Object.defineProperty(ob,'id',{
    writable:false,
    enumerable:false

})
console.log(Object.getOwnPropertyDescriptor(ob,'id'));