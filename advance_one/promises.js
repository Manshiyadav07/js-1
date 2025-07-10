const promiseOne = new Promise(function(resolve,reject){
    //Do an asyn calls
    //db calls ,cryptography 
    setTimeout(function(){
        console.log('Async task is completed');   
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed ");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Manshi Async ");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved ");
    
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"manshi",email:"college.com"})
    },1000)

})
PromiseThree.then(function(user){
 console.log(user);
 


})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"manshi",lastName:"yadav"})
        }else{
            reject("ERROR SOMETHING ")
        }

    },2000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("The promise is either resolved or rejected "))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"js",lastName:"yadav"})
        }else{
            reject("ERROR JS WENT WROng SOMETHING ")
        }

    },2000)
})
async function consumePromiseFive (){
    try {
        const response = await promiseFive
    console.log(response);
        
    } catch (error)
    {
        console.log(error);
        
    }
}
consumePromiseFive()

async function getAlluser(){
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);    
    } catch (error) {
        console.log(error);   
    }
}

getAlluser()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);  
})
.catch((error) => console.log(error));



