//if else
/*if(2 ==="2"){
    console.log("executed")
}else{
    console.log("not");
    
}
*/
// = for asign , == for checking whether equal or not , === for checking data dtype also 

// const balance =100
// if(balance > 500) console.log("test");  // shorthand 

// if(balance <500){
//     console.log("less than");  
// }else if()


//SOME FALSY NAD TRUTHY VALUES
//falsi -> false,0,-0,bIGiNT 0n," ",null,undefined ,NaN

//SOME TRUTHY
// "0",'FALSE'," ",[],{},FUNCION(){}.


/* nulish COALESCING OPERATOR (??): NULL UNDEFINED */
// let val1;
// //val1=10??20
// val1=null??30
// console.log(val1);


//ITERATION 

//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best number");
//     }
    
//     console.log(element);  
// }

// let myArray=["manshi","lalit","lakshi"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);   
// }



// for (let index = 1; index < 20; index++) {
//      if(index == 11){
//         break;
//     }
    
//     console.log(`value of i is ${index}`);
   
// }
// let i=1;
// while (i==5) {
    
//     console.log(i);
//     i=i+1;
    
// }
// let index=1;
// while(index <=10){
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }
// let score =1;
// do {
//     console.log(`score is ${score}`)
//     score++;
// } while (score<=10);


//FOR EACH 
// let count=0
// const greeting = "manshiYadav"
// for (const greet of greeting) {
   
//     console.log(`each char is ${greet}`);
//      count=count+1;
//     //onsole.log(greeting);
//       console.log(count);
      
// }

//MAPPP -->The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
//unique values are there
const map = new Map();
map.set("IN","INDIA");
map.set("USA","UNITED STATES OF AMERICA");
map.set("FR","FRANCE");
//console.log(map);


for (const [key,value] of map) {
    //console.log(key,":-",value);  
}

const myObj ={
    js:"javascript",
    cpp:'cplusplus',
    rb:'ruby'
}
for (const key in myObj) {   //forin for objects 
   //console.log(`${key} shortcut is for ${myObj[key]}`); 

}

const programming =["js","rb","cpp"];
for (const key in programming) {
    //console.log(programming[key]);
    
    
}

//for each 

const coding=["js","ruby","py","cpp","c"];
// coding.forEach( function (item){
//       // callback function hainto naam nhi hoga iska
//       console.log(item);
      
// })

// coding.forEach((item)=>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item); 
// }
// coding.forEach(printMe);

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})

const myCoding=[
    {
        languageName :"javascript",
        filename:'js'
    },
    {
        languageName:"java",
        filename:"java"
    },
    {
        languageName:"cplusplus",
        filename:"cpp"
    }
]

myCoding.forEach((item)=>{
  console.log(item.languageName);
  
})

