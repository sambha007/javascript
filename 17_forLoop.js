// for
let arr=[1,2,3,4,5];
for(let i=0;i<arr.length;i++)
{
    console.log(`at index of ${i} value is ${arr[i]}`);
}
for(let i=0;i<10;i++)
{
    console.log("i=",(i+1)*(i+1));
}
let String="";
for(let i=0;i<5;i++)
{
    for(let j=0;j<i;j++)
    {
        String+="*";
    }
    String+="\n";
   
}
console.log(String);

//key words= break,continue
for(let i=1;i<15;i++)
{
    if(i==13)
    {
        break;
    }
    if(i%2==0)
    {
        continue;
    }
    console.log(i);
}
