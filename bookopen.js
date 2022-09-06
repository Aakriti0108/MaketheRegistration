

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
   axios.post("https://crudcrud.com/api/abc858a1633d46beae98004b07b05e2/AppointmentApp",obj)
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
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)
    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showuseronscreeen(userDetailsObj)
    }
})

function showuseronscreeen(user){
   
    // console.log(localStorage.getItem(user.emailId))
    if(localStorage.getItem(user.email) !== null){
        removeUserFromScreen(user.email)
    }

    const parentNode = document.getElementById('userlist');
    const childHTML = `<li id=${user.email}> ${user.Name} - ${user.email}
                            <button onclick=deleteUser('${user.email}')> Delete User </button>
                            <button onclick=editUser('${user.email}','${user.Name}','${user.phonenumber}')>Edit User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUser(emailId)
{
    var restor=localStorage.getItem(emailId);
    var datali=JSON.parse(restor);
   name1.value=datali.Name;
   email.value=datali.email;
   phone.value=datali.phone;
    deleteUser(emailId);
}
function deleteUser(emailId){
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('userlist');
    const childNodeToBeDeleted = document.getElementById(emailId);
    if(childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
    }
}

