const fs = require('fs');
//---output of file GetDataAndAddDataInAQueue------
const output= [

"ID:1, Name:Tiger Nixon, Salary:320800, Age:61,Priority:High",
"ID:2, Name:Garrett Winters, Salary:170750, Age:63,Priority:Normal",
"ID:3, Name:Ashton Cox, Salary:86000, Age:66,Priority:Low",
"ID:4, Name:Cedric Kelly, Salary:433060, Age:22,Priority:High",
"ID:5, Name:Airi Satou, Salary:162700, Age:33,Priority:Normal",
"ID:6, Name:Brielle Williamson, Salary:372000, Age:61,Priority:High",
"ID:7, Name:Herrod Chandler, Salary:137500, Age:59,Priority:Normal",
"ID:8, Name:Rhona Davidson, Salary:327900, Age:55,Priority:High",
"ID:9, Name:Colleen Hurst, Salary:205500, Age:39,Priority:Normal",
"ID:10, Name:Sonya Frost, Salary:103600, Age:23,Priority:Normal",
"ID:11, Name:Jena Gaines, Salary:90560, Age:30,Priority:Low",
"ID:12, Name:Quinn Flynn, Salary:342000, Age:22,Priority:High",
"ID:13, Name:Charde Marshall, Salary:470600, Age:36,Priority:High",
"ID:14, Name:Haley Kennedy, Salary:313500, Age:43,Priority:High",
"ID:15, Name:Tatyana Fitzpatrick, Salary:385750, Age:19,Priority:High",
"ID:16, Name:Michael Silva, Salary:198500, Age:66,Priority:Normal",
"ID:17, Name:Paul Byrd, Salary:725000, Age:64,Priority:High",
"ID:18, Name:Gloria Little, Salary:237500, Age:59,Priority:Normal",
"ID:19, Name:Bradley Greer, Salary:132000, Age:41,Priority:Normal",
"ID:20, Name:Dai Rios, Salary:217500, Age:35,Priority:Normal",
"ID:21, Name:Jenette Caldwell, Salary:345000, Age:30,Priority:High",
"ID:22, Name:Yuri Berry, Salary:675000, Age:40,Priority:High",
"ID:23, Name:Caesar Vance, Salary:106450, Age:21,Priority:Normal",
"ID:24, Name:Doris Wilder, Salary:85600, Age:23,Priority:Low"
];

const csvHeader = "ID,Name,Salary,Age,Priority\n";
const csvRows =output.map(line => 
{
const values = line.split(',').map(item => item.split(':')[1].trim());
return values.join(',');
}).join('\n');

const csvData = csvHeader +csvRows;
fs.writeFileSync('output.csv', csvData);
console.log("CSV file created");

