const posts=[{title:'post one'},{title:'post two'}]

function getedited()
{
    let output='';
    posts.forEach((post,index)=>{
    output+=`<li> ${post.title} </li>`;
     });
     document.body.innerHTML=output;
}

function createedit(post)
{
    return new Promise((resolve,reject)=>{
        posts.push(post);
        const error=false;
        if(!error)
        {
            resolve()
        }
        else{
            reject('Something wants wrong')
        }
    })
}

function deletepost(post)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            if(posts.length!=0){
                resolve(posts.pop());
        }
         else{
            reject('array is empty')
           
         }
        })
        })
}

 createedit({title:'post three'})
.then(getedited)
.then(deletepost)
.then(deletepost)
.then(deletepost)
.then(deletepost)
.then(getedited)
.then(deletepost)

.catch( err=> console.log(err));
createedit({title:'post four'})


