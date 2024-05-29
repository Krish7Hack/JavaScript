const accountId = 1234;
let accountEmail = "Krishnamalani77@gmail.com";
var accountPassword="12345";
accountCity="Jaipur";

//accountId=2 //not allowed

accountEmail="malpaniks@rknec.edu";
accountPassword="5678";
accountCity="Aurangabad";

console.log(accountId);

/*
Please not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity]);