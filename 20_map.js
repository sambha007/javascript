const coding=["yes ","no","js","py","java"];

const nums=coding.forEach((item)=>{
    console.log(item);
    return item
})
console.log(nums);

const myarr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const newnum=myarr.filter((num)=>num>4&&num<10)
console.log(newnum);

const mynum=[]
myarr.forEach((num)=>{
    if(num>2&&num<13)
    {
        mynum.push(num);
    }
})
console.log(mynum);

const libeary=[
    {title:"book one ",author:"sambhaji",publish:2002,edtion:2024},
    {title:"book two ",author:"mayur",publish:2003,edtion:2024},
    {title:"book three ",author:"santosh",publish:2001,edtion:2024},
    {title:"book four",author:"esheta",publish:2004,edtion:2024},
    {title:"book five ",author:"vaishali",publish:2004,edtion:2024},


];
console.log(libeary);
console.log("extract data");
let data=libeary.filter((bk)=>{
    return bk.publish==2004})
console.log(data);

let data1=libeary.filter((lb)=>lb.author==="sambhaji");
console.log(data1);

const mynumber=[1,2,3,4,2,5,8,1,4,7,3,6,9,789,456,123]
const ne=mynumber.map((num)=>num+10)
console.log(ne);

const n=mynumber
          .map((num)=>num*10)
          .map((num)=>num+2)
          .filter((num)=>num%2===0)
console.log(n);

const x=[1,2,3,4]

const mytotal=x.reduce((acc,currval)=>{
    console.log(`acc=${acc} and currval ${currval}`);
    return acc+currval;
},0)

console.log(mytotal);









