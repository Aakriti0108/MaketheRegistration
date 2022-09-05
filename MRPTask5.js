
// part One
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
//   }

//   function createpost(post)
//   {
//     setTimeout(()=>{
//       posts.push(post);
//     },2000);
//   }
//   getPosts();
//  createpost({title:'Post Three',body:'This is post three'});
        
// part two callbacks
//  const posts=[{title:'Post One',
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
//     setTimeout(()=>{
//       posts.push(post);
//       callback();
//     },2000);
  
//   }

//  createpost({title:'Post Three',body:'This is post three'},getPosts);
 // Three parts
// const posts=[{title:'Post One',body:'This is post one',createdAt: new Date().getTime()},
//        {title:'Post Two', body:'this is a post two',createdAt: new Date().getTime()}
// ];
 
// let intervalid =0;
// function getPosts()
// {
//   clearInterval(intervalid)
//  intervalid =setInterval(()=>
//  {
// setTimeout(()=>{
//   let output='';
// posts.forEach((post,index)=>{
// output+=`<li> ${post.title} - lasted time${(new Date().getTime()-post.createdAt)/1000}</li>`;
// });
// console.log('Interval='+ intervalid);
// document.body.innerHTML=output;
// },1000),1000})
// }

// function createpost(post,callback)
// {
// setTimeout(()=>{
//  posts.push({...post,createdAt:new Date().getTime()});
//  callback();
// },2000);

// }

//  function newcreatepost(post,callback)
//  {
//    setTimeout(()=>{
//      posts.push({...post,createdAt:new Date().getTime()});
//      callback();
//    },3000);
//  }




// const likes=[{title:'like one', body:'this is a like one',createAt: new Date().getTime()},
//             {title:'like two', body:'this is a like two',createAt: new Date().getTime()}
//       ];
 
//       let intervalid=0;
//       function getlikes()
//       {
//         clearInterval(intervalid)
//        intervalid =setInterval(()=>
//        {
//       setTimeout(()=>{
//         let output='';
//       likes.forEach((cute,index)=>{
//       output+=`<li> ${cute.title} - lasted time${(new Date().getTime()-cute.createAt)/1000}</li>`;
//       });
//       console.log('Interval='+ intervalid);
//       document.body.innerHTML=output;
//       },1000),1000})
//       }
     


//       function createlike(cute,callback)
//       {
//         setTimeout(()=>{
//            likes.push({...cute,createAt:new Date().getTime()})
//            callback();
//         },1000)
//       }

//       function createlike1(cute,callback)                                  
//       {
//         setTimeout(()=> {
//            likes.push({...cute,createAt:new Date().getTime()})
//            callback();
//         },1000)
//       }
      
//       function createlike1(cute,callback)
//        {
//          setTimeout(()=>{
//            likes.push({...cute,createAt:new Date().getTime()});
//            callback();
//          },3000);
//        }
      
//       getlikes();
//       createlike({title:'3like',body:'this is 3 like'},getlikes)
//       createlike1({title:'4like',body:'this is 4 like'},getlikes)
