// const { jsx } = require("react/jsx-runtime");

// const myArr =[1,2,7,3,4];
// const myarr2 = new Array(1,2,3,4);
// // console.log(myarr2[1]);
// // myArr.push(6);
// // console.log(myArr);
// // myArr.pop();
// // console.log(myArr)
// // myArr.unshift(15); -> adds the value in the start of a array
// myArr.shift();
// //console.log(myArr.includes(7));

// //slice , splice -> original array ko manipulate kr deta h 
// // const myAr = myArr.slice(1,3);
// // console.log(myAr);
// // const myA1r = myArr.splice(1,3);
// // console.log(myA1r);
// // console.log(myArr);


// const hero=["anshi","manshi","lksi","lakshi"]
// const fam=["sang","aman","laalit","indr"]
// const all =hero.concat(fam);
// //console.log(all);


// // concat returns new array 

// //spread ->
// const allnew =[...hero,...fam];
// //console.log(allnew);

//console.log(Array.from("ManshiLalit"))

//singleton
//Object LITERALS 
//Object.create 
// const mySum = Symbol("keys1")

// const jSUser ={
//     name: "manshi",
//     "full name ": "MAnshi Yadav",
//     age:13,
//     [mySum]: "mmykey1",  // symbol use as key 
//     email: "manshi11etw@gmail.com",
//     isloggedIn : false
// }
// console.log(jSUser.name); // these are two types for using retriving value from a  object
// console.log(jSUser["name"]);
// console.log(jSUser["full name "]);
// console.log(  jSUser[mySum]);

// jSUser.greeting = function(){
//     console.log(`hello js user manshi ${this["full name "]}`);
    
// }
// console.log(jSUser.greeting());



//OBJECTS CONTINUE 

//const tinderUser = new Object()  // singleton 
//    const tinderUser ={}  // non singleton 
// tinderUser.id="12nmdk"
// tinderUser.name="mans"
// tinderUser.isLoggedIn =false 

// console.log(tinderUser);

// const regularUser = {
//     email :"sonam",
//     fullName: {
//         yadav: {
//             first:"max",
//             last : "yadx"
//         }
//     }
// }
// console.log(regularUser.fullName.yadav.first);
 const obj1 ={1:"a",2:"B"};
 const obj2 ={3:"d",4:"f"};
 //const obj3 = {obj1 , obj2}
 //const obj3 =Object.assign({},obj1,obj2)  // for adding objects
 const obj3 ={...obj1,...obj2}
 //console.log(obj3);
 
 const course ={
    cousename : "js hindi",
    price:100
 }

 const {cousename: na} = course  // destructuring 
 //console.log(na);
 
 // API ->  Application programming interface 
 
//  {
//     "name":"manshi",
//     "cousename":"js ",
//     "price":"free"

//  }