document.getElementById("btn1").addEventListener("click", myInsert);

async function myInsert() {

    let empno = document.getElementById("empno").value;
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;

    const response = await fetch("http://localhost:3000/employees", {
        method: "POST",
       
        body: JSON.stringify({
            empno: empno,
            name: name,
            city: city,
            salary: salary
        })
    });

    alert("Data successfully saved");
}

