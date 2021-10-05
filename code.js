let inputdata=document.getElementById("input");
let addbutton=document.getElementById("add");
let addevent=document.getElementById("addevent");


//add event
let countaddid=0;
let countdeleteid=1000;

addbutton.addEventListener('click',function()
{
    if(inputdata.value!='')
    {
    let createlist=document.createElement('li');

    createlist.innerHTML=inputdata.value;
    let btndelete = document.createElement("BUTTON"); 
    btndelete.setAttribute('id',countdeleteid); 
    btndelete.setAttribute('onclick','performdeletion(id)');
    
btndelete.innerHTML = "delete";                   
createlist.appendChild(btndelete);    
    let btn = document.createElement("BUTTON"); 
    btn.setAttribute('id',countaddid);
btn.innerHTML = "done"; 
btn.setAttribute('onclick','performcheck(id)');                  
createlist.appendChild(btn); 
addevent.appendChild(createlist);
inputdata.value='';
countaddid++;
countdeleteid++;

}

})

//Not completed box
//check box
let countdeleteid2=2000;
let completed=document.getElementById('completedevent');
function performcheck(id)
{
    let change=document.getElementById(id);//selecting list from id
    let list=document.createElement('li');
    
    let x=change.parentNode.innerText;
    let y=x.split(/\r?\n/);
   // console.log( y);
    list.innerHTML=y[0];
   
    //list.innerHTML
   
    let btndelete = document.createElement("BUTTON"); 
    btndelete.setAttribute('id',countdeleteid2); 
    btndelete.setAttribute('onclick','performdeletion2(id)');
    btndelete.innerHTML = "delete"; 
    list.appendChild(btndelete);
    completed.appendChild(list);
    
    // change.parentNode.removeChild(change.parentNode.firstChild);
    // change.parentNode.removeChild(change.parentNode.firstChild);
    change.parentNode.remove();
    countdeleteid2++;

    

}

//delete box
function performdeletion(id)
{
    let change=document.getElementById(id);
    change.parentNode.remove();
}
// //complete box
function performdeletion2(id){
    let change=document.getElementById(id);
    change.parentNode.remove();

}


