//IMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai(){
    console.log(" DB Connected ");   //named iife
})();
// first parantesis for function defination and the other one is for function call
//global scope ke polution se kuch problem hoti h unko htane ke loiye we use iife

((name)=>{
    console.log(`file connected ${name}`  );   //unnamed iife
    
})("Lalit,Lakshi,Manshi")
