// const posts=[{title:'post one'},{title:'post two'}]

// function getedited()
// {
//     let output='';
//     posts.forEach((post,index)=>{
//     output+=`<li> ${post.title} </li>`;
//      });
//      document.body.innerHTML=output;
// }

// function createedit(post)
// {
//     return new Promise((resolve,reject)=>{
//         posts.push(post);
//         const error=false;
//         if(!error)
//         {
//             resolve()
//         }
//         else{
//             reject('Something wants wrong')
//         }
//     })
// }

// function deletepost(post)
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             if(posts.length!=0){
//                 posts.pop();
//                 getedited();
//                 resolve();
//         }
//          else{
//             reject('array is empty')
           
//          }
//         },1000)
//         })
// }

//  createedit({title:'post three'})
//  createedit({title:'post four'})
// .then(getedited)
// .then(deletepost)
// .then(deletepost)
// .then(deletepost)


// .catch( err=> console.log(err));



// Promise two



const posts=[{title:'Post One', body:'this is post one'},
            {title:'post two', body:'this is post two'}]

            function getedited(){
                let output='';
              posts.forEach((post,index)=>{
             output+=`<li> ${post.title}</li>`
              })
              document.body.innerHTML+=output;
            }

     function createedit(post)
     {
        return new Promise((resolve,reject)=>{
            posts.push(post)
            let error=false;
            if(!error)
            {
                getedited();
                resolve('going')
               
            }
            else{
                reject('Error:Something went wrong')
            }
        })
     }
     
// const promise1= new Promise('hello world');
// const promise2= 10;
// const promise3=new Promise((resolve,reject)=>{
//     (resolve,'goodbye')})     
//     Promise.all([promise1,promise2,promise3]).then(values=> console.log(values))
const user ={
    name:'aakriti',
   meettime :'13th august'
}
function lastedtime()
{
    return new Promise((resolve,reject)=>{
       
        user.meettime=new Date();

        reject('want wrong')
        resolve(user.meettime)
       
        
    })
}


let edited=createedit({title:'post three'})
let updated=lastedtime();
Promise.all([edited,updated])
.then(get=>console.log(get))
.catch(err=>console.log(err))