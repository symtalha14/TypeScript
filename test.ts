interface phoneNumberList{
    [index:string]:number
}

var employees:phoneNumberList={};
console.log(employees);
employees["John"]=7123123123;

console.log(employees);