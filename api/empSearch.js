document.getElementById("btn1").addEventListener("click",mySearch);
async function mySearch(){
    let mydata="";
    let empno=document.getElementById("txtval").value;
    let api=`http://localhost:3000/employees/?empno=${empno}`;
    const obj=await fetch (api);
    const data=await obj.json();
data.map((Key)=>{
    mydata=`
    <h1> empno:${Key.empno}</h1>
<h1> name :${Key.name}</h1>
<h1> city:${Key.city}</h1>
<h1> sallary:${Key.sallary}</h1>
    `
})
document.getElementById("demo").innerHTML=mydata;
}