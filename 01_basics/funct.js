

// function sayMyName(){
//     console.log("Manshi lalit");
    
// }
// sayMyName()

// function addTwoNum(num1,num2){  // while defination paramteres 
//     console.log(num1+num2);
    
// }node 01_basics/funct.js

// addTwoNum(10,15);  // call krte time arguments

// function calccartprice(...num1){  //... rest operator or spread operator
//     return num1
// }
//console.log(calccartprice(2,4,6))

// const user ={
//     username :"man",
//     price:10

// }
// function handleobject(anyObject){
//     //console.log(`username is ${anyObject.username} and price ${anyObject.price}`);
    
// }
// handleobject(user)   // object pass kiya jb hmne function mein

// const myNewarray=[100,200,200]
// function returnSecondValue(getArray){
//     return getArray[1]
// }
// //console.log(returnSecondValue(myNewarray))


//done with func move to scope

// let  a= 10
// const b=20
// var c= 30
// console.log(a);
// console.log(b);
// console.log(c);


  // intresting topic ???????
//  (addOne(5))
//   function addOne(num){
//     return num+1;
//   }

// // addTwo(5) -> in functions in this case you are not able to acces this this call before intilization so remember this 
//  const addTwo = function(num){
//     return num+2;
//  }
//  addTwo(5)



//arrow funcfion 
// const user={
//     username:"lalit",
//     price:100,

//     WelocomeMessage: function(){
//         console.log(`${this.username},welcome to website`);
        
//     }

// }
// user.WelocomeMessage()
// user.username="lakshi"
// user.WelocomeMessage()

//browser ke andr jab bhi voh object run krta hai to coh h window objec


// function chai(){
//     let username ="lalit "
//     console.log(this.username);   -> we are not able to acces this here
    
// }
// chai()

// const chai= () =>{
//     let username="lalit"
//     console.log(this.username);
    
// }
// chai();

//  const addTwonNumbers =(num1,num2)=>{
//     return num1 + num2;

// }         ==> BASIC ARROW FUNCTION 
// console.log(addTwonNumbers(4,7));

//const addTwonNumbers =(num1,num2)=> num1 + num2  // ese bhi kr skte ho 
 const addTwonNumbers =(num1,num2)=> (num1 + num2) // and ese bhi agr paranthesis lgaoge to return likhne ki jrurat nhi h or agr parathesis lgaoge toh return likhna pdega 
        //THIS IS IMPILCIT RETURN METHOD IN THIS WE DONT NEED TO USE RETUEN KEYWORD 
console.log(addTwonNumbers(4,7))
 
//for returning objects you should also wrap them in paranthesis 
