const arr=[1,2,3,4,5,6]

for(const num of arr )
{
    console.log(num);
}
const greetings="hello bhau ";
for(const g of greetings)
{
    console.log(g);
}

const map=new Map();
map.set("In","India")
map.set("mh","mumbai")
map.set("pu","pune")

console.log(map);
console.log("");

for(const [key,value] of map)
{
    console.log(key,":-",value);
}
console.log("");
const obj={
    c:"c",
    cpp:"c++",
    java:"java",
    js:"javascript",
    py:"python",
    html:"HTML",
    css:"css"

}

for (const key in obj) {
    console.log(key,"=",obj[key]);
    console.log(`${key } is extenstion for  ${obj[key]}  language`);
}

const coding=[1,2,"a","b","c","4",5]

coding.forEach(function nu(item){
    console.log(item);
})
coding.forEach((item)=>{
    console.log(item);
})

function pr(item){
    console.log(item);
}
coding.forEach(pr)

const myarr=[
    {
        language:"Java",
        extension:"java"

    },
    {
        language:"javascript",
        extension:"js"

    },
    {
        language:"c++",
        extension:"cpp"

    },
    {
        language:"c",
        extension:"c"

    },
]
myarr.forEach((item)=>{
    console.log(item);
})
myarr.forEach((item)=>{
    console.log(item.language,item.extension);
})