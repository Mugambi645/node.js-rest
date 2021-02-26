const express = require("express");
const app = express();
const fs = require("fs");
const port = 5000;
//add employee
let employee = {
    "employee3": {
        "name": "kelvin machanger",
        "department": "IT",
        "salary": 200000,
        "id": 3
    }
}
app.post("/addemployee", (req, res) => {
    fs.readFile(__dirname, "/" + "employees.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        data = JSON.parse(data);
        data["employee3"] = employee["employee3"];
        console.log(data);
        res.end(JSON.stringify(data));
    });

});
//list all employees
app.get("/listemployee", (req, res) => {
    fs.readFile(__dirname + "/" + "employees.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
        res.end(data);
    })
});
//list particular employee
app.get("/:id", (req, res) => {
    fs.readFile(__dirname + "/" + "employees.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        let employees = JSON.parse(data);
        let _employee = employees["Employee" + req.params.id];
        console.log(_employee);
        res.end(JSON.stringify(_employee));
    })
});
//delete employee
app.get("/deleteemp", (req, res) => {
    fs.readFile(__dirname + "/" + "employees.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        data = JSON.parse(data);
        delete data[id];
        console.log(data);
        res.end(JSON.stringify(data));
    })
})

app.listen(process.env.PORT || port, () => console.log("Server is listening"));
