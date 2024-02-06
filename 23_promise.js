 const promiseOne=new Promise(function(resovle,reject){
    setTimeout(function(){
        console.log('Async task is compelete');
        resovle()

    },1000)
 })
 promiseOne.then(function(){
    console.log('promise consumed');
 })
 new Promise(function(resovle,reject){
    setTimeout(function(){
        console.log('async task 2');
        resovle()
    },1000)
 }).then(function(){
    console.log("async 2 reslolved");
 })

 const promiseThree=new Promise(function (resovle,reject) {
    setTimeout(function(){
        resovle({username:'Chai',email:"chai@chaiaurcode.com"})
    },1000)
 })
 promiseThree.then(function(user){
    console.log(user);
 })
const promiseFour=new Promise(function(resovle,reject){
    setTimeout(function(){
        let error=false
        if(!error)
        {
            resovle({username:'hitesh',password:'123'})
        }
        else
        {
            reject('ERROR: Something went wrong ')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is resolved or reject"))

const promiseFive=new Promise(function(resovle,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resovle({username:'javascript',password:'123'})
        }
        else
        {
            reject('ERROR: js something went wrong')
        }
    },1000)
});
async function consumepromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }
    catch(error)
    {
        console.log(error);
    }
}

consumepromiseFive()

async function getAlluser() {
   try {
    const response=await fetch('https://randomuser.me/api/')
    console.log(response);
    const data=response.json()
    console.log(data);
   } catch (error) {
      console.log("E:",error);
   }
    
}
getAlluser()

console.log('*********************************************');

fetch('https://randomuser.me/api/').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>console.log(error))