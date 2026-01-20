let table=`<table borderr=2 width="600" bgcolor="yellow">
<tr>
<th> EMPno</th>
<th> NAME </th>
<th> CITY</th>
<th>  SALARY </th>
<tr/>
`
async function dataDisplay(){
 const obj=await fetch("http://localhost:3000/employees")
 const data=await obj.json();
 data.map((key)=>{
    table+=`<tr>
    <td> ${key.empno}</td>
      <td>${key.name} </td>
        <td> ${key.city}</td>
          <td> ${key.salary}</td>
          <tr/>

    `
 })

 table+="</table>"

 document.getElementById("demo").innerHTML=table;

}
dataDisplay();