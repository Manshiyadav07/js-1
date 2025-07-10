// const { use } = require("react");

// const user ={
//     username :"hitesh",
//     loginCount :8,

//     getUserDetails: function(){
//         //console.log(`useranme ${this.username}`);
        
//         // console.log("Got user deatils from db");
//         //console.log(this)
        
//     }
// }
// //console.log(user.getUserDetails());

//console.log(this);

function User(username , loginCount,isLoggedIn){
    this.username = username;
    this.loginCount=loginCount;
    this.isLoggedIn= isLoggedIn;
    return this
    
}

const userOne = new User('lalit',5,"yes")
console.log(userOne.constructor);

// new
// 1. first to ek instance create hota hai 
// 2. constructor func call hota h new keyword ke karan  it packs all arg vagera 
// 3. this ki help se inject hojate h 
// 4. fucntion ki help se mil jate hai 