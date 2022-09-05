// const posts=[{title:'Post One',
//      body:'This is post one'},
//             {title:'Post Two',
//            body:'this is a post two'}
// ];

// function getPosts()
//  {
//    setTimeout(()=>{
//   let output='';
//  posts.forEach((post,index)=>{
//   output+=`<li> ${post.title} </li>`;
//    });
//      document.body.innerHTML=output;
//   },1000)
//  }

//   function createpost(post,callback)
//   {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             posts.push(post);
//             const error = true;
//             if(!error)
//             {
//                 resolve();
//             }
//             else
//             {
//                 reject('Error: SomeThing went wrong');
//             }
//           },2000);
//     })
//     .then(getPosts)
//     .catch(err=>console.log(err))
    
  
//   }

//  createpost({title:'Post Three',body:'This is post three'},getPosts);

//2nd promise
// const posts=[{title:'Post One',
//      body:'This is post one'},
//             {title:'Post Two',
//            body:'this is a post two'}
// ];

// function getPosts()
//  {
//    setTimeout(()=>{
//   let output='';
//  posts.forEach((post,index)=>{
//   output+=`<li> ${post.title} </li>`;
//    });
//      document.body.innerHTML=output;
//   },1000)
//  }

//   function createpost(post,callback)
//   {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             posts.push(post);
//             const error = false;
//             if(!error)
//             {
//                 resolve();
//             }
//             else
//             {
//                 reject('Error: SomeThing went wrong');
//             }
//           },2000);
//     })
//  }
//  //createpost({title:'Post Three',body:'This is post three'},getPosts)
//  //.then(getPosts)
//  //.catch(err=>console.log(err))
// const promise1= Promise.resolve('Hello World')
// const promise2= 10;
// const promise3= new Promise((resolve,reject)=>{
//   setTimeout(resolve,2000,'GoodBye')});
// Promise.all([promise1,promise2,promise3]).then((values)=>console.log(values))




//three
// const posts=[{title:'Post One',
//      body:'This is post one'},
//             {title:'Post Two',
//            body:'this is a post two'}
// ];

// function getPosts()
//  {
//    setTimeout(()=>{
//   let output='';
//  posts.forEach((post,index)=>{
//   output+=`<li> ${post.title} </li>`;
//    });
//      document.body.innerHTML=output;
//   },1000)
//  }

//   function createpost(post,callback)
//   {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             posts.push(post);
//             const error = false;
//             if(!error)
//             {
//                 resolve();
//             }
//             else
//             {
//                 reject('Error: SomeThing went wrong');
//             }
//           },2000);
//     })
//  }
 
// async function init()
//  {
//   await createpost({title:'Post Three',body:'This is Post Three'});
//   getPosts();
//  }
//  init();

 //four
//  const posts=[{title:'Post One',
//  body:'This is post one'},
//         {title:'Post Two',
//        body:'this is a post two'}
// ];

// function getPosts()
// {
// setTimeout(()=>{
// let output='';
// posts.forEach((post,index)=>{
// output+=`<li> ${post.title} </li>`;
// });
//  document.body.innerHTML=output;
// },1000)
// }

// function createpost(post,callback)
// {
// return new Promise((resolve,reject)=>
// {
//     setTimeout(()=>{
//         posts.push(post);
//         const error = false;
//         if(!error)
//         {
//             resolve();
//         }
//         else
//         {
//             reject('Error: SomeThing went wrong');
//         }
//       },2000);
// })
// }

// async function fetchUser()
// {
//  const res= await res.fetch('file:///C:/Users/HP/Desktop/extra%20nonsense/DomMani/basic.html');
//  const data=await res.json();
//   console.log(data);
// }
// fetchUser();