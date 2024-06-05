function loadvalue(){
const a=localStorage.getItem("data")||"[]";
return JSON.parse(a);
}
function addvalue(value){
const data=loadvalue();
data.push(value);
localStorage.setItem("data",JSON.stringify(data));
}
function appendtoHTML(value){
    const list=document.getElementById("list");
    const c=document.createElement("li");
    c.textContent=`Name:${value.firstName}  ${value.lastName},  Address1 : ${value.address1}, Address2 :${value.address2}, City: ${value.city}, State:${value.state}, Pin Code:${value.zip}`;
    list.appendChild(c);

}

const first=document.getElementById("First");
// const middle=document.getElementById("Middle");
const last=document.getElementById("Last");
const ad1=document.getElementById("ad1");
const ad2=document.getElementById("ad2");
const city=document.getElementById("city");
const state=document.getElementById("state");
const zip=document.getElementById("zip");
const submit=document.getElementById("add")
submit.addEventListener("click",()=>{
    const a =first.value.trim();
    const c=last.value.trim();
    const d=ad1.value.trim();
    const e=ad2.value.trim();
    const f=city.value.trim();
    const g=state.value.trim();
    const h=zip.value.trim();
    if(a==""||c==""||d==""||e==""||c==""||f==""||g==""||h==""){
        alert("Please enter some value");
    }
    else{
        const userData = {
            firstName: a,
            lastName: c,
            address1: d,
            address2: e,
            city: f,
            state: g,
            zip: h
        }; 
        addvalue(userData);
        appendtoHTML(userData);
        first.value="";
        last.value="";
        ad1.value="";
        ad2.value="";
        city.value="";
        state.value="";
        zip.value="";
    }
})
document.addEventListener("DOMContentLoaded",()=>{
    const storedata=loadvalue();
    storedata.forEach(element => {
        appendtoHTML(element);
    });
})
