
//     document.getElementById("btn1").addEventListener("click", myInsert);

// async function myInsert() {

//     let empno = document.getElementById("empno").value;
//     let name = document.getElementById("name").value;
//     let city = document.getElementById("city").value;
//     let salary = document.getElementById("salary").value;

//     const response = await fetch("http://localhost:3000/employees", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             empno: empno,
//             empname: name,
//             city: city,
//             salary: Number(salary)
//         })
//     });

//     if (response.ok) {
//         alert("Data Inserted Successfully!");
//     } else {
//         alert("Error saving data");
//     }
// }
document.getElementById("btn1").addEventListener("click", myInsert);

async function myInsert() {

    let empno = document.getElementById("empno").value;
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;

    const response = await fetch("http://localhost:3000/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            empno: empno,
            name: name,      // ✅ FIXED
            city: city,
            salary: Number(salary)
        })
    });

    if (response.ok) {
        alert("Data Inserted Successfully!");
    } else {
        alert("Error saving data");
    }
}
