// const coding=['js',"ruby","cpp","c","py"]
//  const values = coding.forEach((item)=>{
//     //console.log(item);
//     return item;
// })
// console.log(values);


//const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNum = myNums.filter((num)=>( num >5))
//ek or way agra scope lga demge toj
//const newNum = myNums.filter((num)=>{
    //return num>5
//})
//console.log(newNum);
//filter callback hoga ek condition denge jo jo isko krega verify usko likhenege

//const newNum =[1,2,3,4,5,6,7,8,9,10];
//const fin = newNum.map((num)=>( num+10))
//console.log(fin);


//chaining  -> ek ke baad ek krke functions lga do 
//const newNum1 = newNum.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>15)
//console.log(newNum1);

//reduce 
const myNums =[1,2,3]

/*const myTotal = myNums.reduce(function(acc,curval) {
    console.log(`acc :${acc} and currval:${curval} `)
    return acc+curval
},3)
console.log(myTotal);*/

const myTotal  = myNums.reduce((acc,curval)=>acc+curval,0)
console.log(myTotal);


const shoppingCart=[
    {
        itemname:"js couse",
        itemPrice:299
    },
    {
        itemname:"py",
        itemPrice:499
    },
    {
        itemname:"c",
        itemPrice:500,
        
    },
]

const price = shoppingCart.reduce((acc,item)=>(acc + item.itemPrice),0)
console.log(price);
