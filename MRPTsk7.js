// console.log('Person1:shows tickets')
// console.log('Person2:shows tickets')
//   var bringTicket=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve('ticket')
//     },2000)
// })
    
// console.log('Person4:shows tickets')
// console.log('Person5:shows tickets')
// console.log('Person6:shows tickets')
// // bringTicket.then((t)=>{
// //     console.log(`Person3:shows ${t}`);
// // })
//  var enjoy = bringTicket.then((t)=>{
//    console.log('husband:lets go in')
//    console.log('wife:i m hungry')
//    console.log(`${t}`)
//    return new Promise((resolve,reject)=>{
//     resolve(`i want ${t}`)
//    })
// })
// // enjoy.then((t=>{
// //     console.log(t);
// // }))
// var butter=enjoy.then((t)=>{
//     console.log(t)
//     console.log('husband wants butter in popcorn')
//     console.log('i donot want  ')
//     return new Promise((resolve,reject)=>{
//         resolve(`lets us buy butter ${t}`)
//     })
// })

// butter.then((t)=>{
//      console.log(t);
// })

// async promise
// const movie= async()=>
//     'movieTime';

// movie().then((m)=>{
//     console.log(m)
// })


// ASYNC


// const party = async()=>{

// const enjoy = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`i want popcorn`)
//         },3000) 
//         })

// const bringticket=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         resolve('ticket')
//         },2000)
//     })
    
// var butter= new Promise((resolve,reject)=>{
//                     resolve(`lets us buy butter `)
//                 })

//  var getcolddrinks =new Promise((resolve,reject)=>{
//             resolve(`buy me a coke`)
//         })
      
//      let enjoymeal2=await enjoy;
//     console.log('husband:lets go in')
//     console.log('wife:i m hungry')
//     console.log(`${enjoymeal2}`)

//     let enjoymeal1=await bringticket;
//      console.log(`i want ${enjoymeal1}`)
    

//     const enjoymeal3=await butter;
//     console.log('husband wants butter in popcorn')
//     console.log(`i donot want ${enjoymeal3}`)

//     const getmecoke=await getcolddrinks;
//     console.log('i m going outside , Do u want something')
//     console.log(`${getmecoke}`)

 
//     return enjoymeal3;
// }
// party().then((m)=>{
//     console.log(`${m}`)
// })
 // async promise.all
//  const party = async()=>{

//     const bringticket=new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//             resolve('ticket')
//             },2000)
//         })
//     const getpop= new Promise((resolve,reject)=>resolve(`popcorn-maggie`))
//     const getcandy=new Promise((resolve,reject)=>resolve(`candy`))
//     const getcoke=new Promise((resolve,reject)=>resolve(`coke`))

//         let ticket =await bringticket;
        
       
    
//      let [ticket1,pop,butter] = await Promise.all([getpop,getcandy,getcoke])
//      console.log(`${ticket1},${pop},${butter}`)
//         return ticket;
//                 }
//     party().then((m)=>{
//         console.log(`${m}`)
//     })

// const movie=async()=>{
//     const bringTicket=new Promise((resolve,reject)=>{
//         reject('wife brought ticket')
//     })
//     let ticket;
//     try{
//          ticket =await bringTicket;
//     }
//     catch(e){
//        ticket='wife didnt come back';
//     }
//     return ticket
// }
// movie().then((t)=>console.log(t))
// .catch(err=>console.log(err))

// create and delete
const posts=[
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'}
];

function getPosts(){
  
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            curDate=new Date();
            output+=`<li>${post.title} </li>`;
        });
        document.body.innerHTML=output;
        
        },1000);};



function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error =false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: Somthing went wrong')
            }
        },2000)
    });
}
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(posts.length!=0){
            resolve(posts.pop());
            getPosts();  
        }
        else{
            reject('Error: Array is empty now')
        }
        },1000);
    });
}

async function printPost(){
    await createPost({title:'Post Three',body:'This is third post'});
    await getPosts();
    await deletePost();
    await deletePost(); 
    await deletePost();
    try{
        await deletePost();
    }
    catch(err){
        console.log(err)
        await createPost({title:'Post Four',body:'This is Fourth post'});
        await getPosts();
        await deletePost();
    }
}
printPost();