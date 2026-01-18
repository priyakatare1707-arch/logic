// let table = `<table border="1" width="600" bgcolor="pink">
// <tr>
//   <th>empno</th>
//   <th>name</th>
//   <th>city</th>
//   <th>salary</th>
// </tr>
// `;
async function myDel(id) {
  await fetch(`http://localhost:3000/employees/${id}`, {
    method: "DELETE",
  });

  alert("Data successfully deleted!");
  dataDisplay();   // refresh table
}

let table = "";

async function dataDisplay() {
  table = `<table border="1" width="600" bgcolor="pink">
  <tr>
    <th>empno</th>
    <th>name</th>
    <th>city</th>
    <th>salary</th>
    <th>action</th>
  </tr>`;

  const obj = await fetch("http://localhost:3000/employees");
  const data = await obj.json();

  data.forEach((key) => {
    table += `<tr>
      <td>${key.empno}</td>
      <td>${key.name}</td>
      <td>${key.city}</td>
      <td>${key.salary}</td>
      <td>
        <button onclick="myDel(${key.id})">Delete</button>
      </td>
    </tr>`;
  });

  table += "</table>";
  document.getElementById("demo").innerHTML = table;
}

dataDisplay();
