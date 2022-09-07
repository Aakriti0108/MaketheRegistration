

const name1=document.getElementById('nameid');
const email=document.getElementById('emailid');
const phone=document.getElementById('phoneid');

function datasubmit(event)
{
    event.preventDefault();

    const obj={
         Name:name1.value,
        email: email.value,
         phone:phone.value
    }
   // localStorage.setItem(obj.email,JSON.stringify(obj));
   axios.post("https://crudcrud.com/api/abc858a1633d46beae98004b07b05ed2/AppointmentApp",obj)
   .then((response)=>{
    showuseronscreeen(response.data)
   // console.log(response)
   })
   .catch((err)=>{
    document.body.innerHTML=  document.body.innerHTML+ "<h4>something went wrong </h4>"
    console.log(err)
   })
    //showuseronscreeen(obj);

    document.getElementById('emailid').value = '';
    document.getElementById('nameid').value = '';
    document.getElementById('phoneid').value ='';
   
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/abc858a1633d46beae98004b07b05ed2/AppointmentApp")
    .then((response)=>{console.log(response)

    for(var i=0;i<response.data.length;i++)
    {
        showuseronscreeen(response.data[i])
    }
}
    )
    .catch((err)=>console.log(err))
    // const localStorageObj = localStorage;
    // const localstoragekeys  = Object.keys(localStorageObj)
    // for(var i =0; i< localstoragekeys.length; i++){
    //     const key = localstoragekeys[i]
    //     const userDetailsString = localStorageObj[key];
    //     const userDetailsObj = JSON.parse(userDetailsString);
    //     showuseronscreeen(userDetailsObj)
    // }
})

function showuseronscreeen(user){
   
    // console.log(localStorage.getItem(user.emailId))
    // if(localStorage.getItem(user.) !== null){
    //     removeUserFromScreen(user.email)
    // }

    const parentNode = document.getElementById('userlist');
    const childHTML = `<li id=${user._id}> ${user.Name} - ${user.email}
                            <button onclick=deleteUser('${user._id}')> Delete User </button>
                            <button onclick=editUser('${user.email}','${user.Name}','${user.phone}','${user._id}')>Upadte git  User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUser(emailId, name, phone,userid)
{
    document.getElementById('emailid').value=emailId;
    document.getElementById('nameid').value=name;
    document.getElementById('phoneid').value=phone;


    deleteUser(userid)
}

function deleteUser(userid){
    // localStorage.removeItem(emailId);
    axios.delete(`https://crudcrud.com/api/abc858a1633d46beae98004b07b05ed2/AppointmentApp/${userid}`)
    .then((response)=>{
        console.log(response)
        removeUserFromScreen(userid);
    })
    .catch((err)=>{
        console.log(err)})
    

}

function removeUserFromScreen(userid){
    const parentNode = document.getElementById('userlist');
    const childNodeToBeDeleted = document.getElementById(userid);
    if(childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
    }
}

