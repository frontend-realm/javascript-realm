
//Question - 1
/*
const employees = [
  { id: 101, name: "Aman", department: "Engineering", salary: 85000, experience: 4 },
  { id: 102, name: "Riya", department: "HR", salary: 55000, experience: 3 },
  { id: 103, name: "Rahul", department: "Engineering", salary: 95000, experience: 6 },
  { id: 104, name: "Priya", department: "Marketing", salary: 65000, experience: 4 },
  { id: 105, name: "Arjun", department: "Engineering", salary: 75000, experience: 2 },
  { id: 106, name: "Neha", department: "Marketing", salary: 80000, experience: 5 }
];

function hrmsDashboard(task,employees) {
    if(task === 'TaskA') {
        const filterEmployee = employees.filter((emp) => emp.salary > 75000);
        return filterEmployee;
    }

    if(task === 'TaskB') {
        return employees.map(emp => {
            return {
                name: emp.name,
                salary: emp.salary
            }
        })
    }

    if(task === 'TaskC') { 
        const calculateEngSlary = employees.reduce((acc,curr) => {
            if(curr.department === 'Engineering') {
                acc = acc + curr.salary;
            }

            return acc
        },0)

        return calculateEngSlary
    }

    if(task === 'TaskD') {
        let length = employees.length; 
        const sumSalary = employees.reduce((acc,curr) => {
            acc = acc + curr.salary;
            return acc
        },0)
        return Math.floor(sumSalary/length)
    }

    if(task === 'TaskE') { 
        return employees.filter(emp => emp.experience > 3).map(emp => {
            return {
                name: emp.name,
                department: emp.department
            }
        })
    }
}

console.log(hrmsDashboard("TaskA",employees));
console.log(hrmsDashboard("TaskB",employees));
console.log(hrmsDashboard("TaskC",employees));
console.log(hrmsDashboard("TaskD",employees));
console.log(hrmsDashboard("TaskE",employees));

or 

single function with their independent responsibility -> 

const getHighPaidEmployees = (employees) =>
    employees.filter(emp => emp.salary > 75000);

const getEmployeeNamesAndSalaries = (employees) =>
    employees.map(({ name, salary }) => ({ name, salary }));

const getEngineeringSalary = (employees) =>
    employees.reduce((total, emp) =>
        emp.department === "Engineering"
            ? total + emp.salary
            : total,
        0
    );

const getAverageSalary = (employees) =>
    employees.reduce((total, emp) => total + emp.salary, 0)
    / employees.length;

const getExperiencedEmployees = (employees) =>
    employees
        .filter(emp => emp.experience > 3)
        .map(({ name, department }) => ({ name, department }));

*/

//Q2>  E-commerce Orders
const orders = [
  { orderId: "ORD101", customer: "Aman", amount: 2400, status: "delivered" },
  { orderId: "ORD102", customer: "Riya", amount: 1200, status: "cancelled" },
  { orderId: "ORD103", customer: "Aman", amount: 3600, status: "delivered" },
  { orderId: "ORD104", customer: "Rahul", amount: 5200, status: "delivered" },
  { orderId: "ORD105", customer: "Priya", amount: 1800, status: "pending" },
  { orderId: "ORD106", customer: "Riya", amount: 4500, status: "delivered" },
  { orderId: "ORD107", customer: "Rahul", amount: 800, status: "delivered" }
];

const deliveredOrders = orders.filter(ord => ord.status === 'delivered');

const requiredArr = orders.map(ord => ord.orderId + '-' + ord.customer);

const totalDeliveredRevenue = orders.reduce((acc,curr) => {
    if(curr.status === 'delivered') {
        acc = acc + curr.amount
    }
    return acc;
},0)

const customersOrderDeliveredObj = deliveredOrders.reduce((acc,curr) => {
    if(!acc[curr.customer]) {
        acc[curr.customer] = curr.amount;
    } else {
         acc[curr.customer] = acc[curr.customer] + curr.amount
    }

    return acc;
},{})

const avgDeliveredOrder = Math.floor(deliveredOrders.reduce((acc,curr) => acc = acc + curr.amount, 0) / deliveredOrders.length) 

console.log(deliveredOrders);
console.log(requiredArr);
console.log(totalDeliveredRevenue)
console.log(avgDeliveredOrder)
console.log(customersOrderDeliveredObj)