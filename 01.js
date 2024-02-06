const accountId= 144578
let accEmail="sambha@gamil.com"
var accP="12456"
accCity="jaipur"

/*
   prefer not to use var
   because of issue in block scope and functional scope
*/
console.log(accountId);
console.log(accEmail);
console.log(accP);
console.log(accCity);
accCity="Warudi"
accP="914546"
console.table([accountId,accEmail,accP,accCity]);