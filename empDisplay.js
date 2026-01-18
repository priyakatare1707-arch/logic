// let table = `<table border="1" width="600" bgcolor="pink">
// <tr>
//   <th>empno</th>
//   <th>name</th>
//   <th>city</th>
//   <th>salary</th>
// </tr>
// `;

// async function dataDisplay() {
//   const obj = await fetch("http://localhost:3000/employees");
//   const data = await obj.json();

//   data.map((key) => {
//     table += `<tr>
//       <td>${key.empno}</td>
//       <td>${key.name}</td>
//       <td>${key.city}</td>
//       <td>${key.salary}</td>
//     </tr>`;
//   });

//   table += "</table>";
//   document.getElementById("demo").innerHTML = table;
// }

// dataDisplay();
async function dataDisplay() {

  let table = `<table border="1" width="600" bgcolor="pink">
  <tr>
    <th>empno</th>
    <th>name</th>
    <th>city</th>
    <th>salary</th>
  </tr>`;

  const obj = await fetch("http://localhost:3000/employees");
  const data = await obj.json();

  data.forEach((key) => {
    table += `<tr>
      <td>${key.empno}</td>
      <td>${key.name}</td>
      <td>${key.city}</td>
      <td>${key.salary}</td>
    </tr>`;
  });

  table += "</table>";
  document.getElementById("demo").innerHTML = table;
}

dataDisplay();   // auto load
