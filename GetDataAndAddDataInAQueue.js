const https = require("https");

//----Actual URL and Bearer token need to be added---
const ORCH_URL = "ORCH URL"
const ORCH_TOKEN = "Bearer token"


function addQueueItem(item)
{
return new Promise((resolve, reject) => {
const data = JSON.stringify({
itemData: {
Name: "New Hires",
SpecificContent: item
},
Priority: item.priority
});

const url = new URL(ORCH_URL);

const options = {
hostname: url.hostname,
path: url.pathname + url.search,
method: "POST",
headers: 
{
"Authorization": `Bearer $(ORCH_TOKEN}`,
"Content-Type": "application/json",
"Content-Length": Buffer.byteLength(data)
}
};

const req = https.request(options, res =>
{
let body ="";
res.on("data", chunk => body += chunk);
res.on("end", () => resolve(body));
});

req.on("error", reject);
req.write(data);
req.end();
});
}



https.get("https://dummy.restapiexample.com/api/v1/employees", res =>
{
let body ="";
res.on("data", chunk => body += chunk);
res.on("end", () => {

  const parsed =JSON.parse(body);
  const employees = parsed.data || [];


employees.forEach(emp => {
const salary = Number(emp.employee_salary);
let priority ="Low";

if (salary>300000) priority ="High";
else if (salary>100000) priority ="Normal";

console.log(`ID:${emp.id}, Name:${emp.employee_name}, Salary:${salary}, Age:${emp.employee_age},Priority:${priority}`);


const queueItem = {
employeeId: emp.id,
name: emp.employee_name,
salary,
age: emp.employee_age,
priority
};

addQueueItem(queueItem)
.then(() => {
console.log(`Added to queue: ${emp.employee_name}`);
})
.catch(err => 
{
console.error(`Failed to add ${emp.employee_name}:`, err.message);
});

});
});
}).on("error", err=> console.error(err));









