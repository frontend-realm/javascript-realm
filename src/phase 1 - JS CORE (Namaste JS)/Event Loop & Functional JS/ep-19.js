const users = [
  { firstName: "Aman", lastName: "Sharma", age: 28 },
  { firstName: "Riya", lastName: "Verma", age: 28 },
  { firstName: "Rahul", lastName: "Kumar", age: 24 },
  { firstName: "Priya", lastName: "Singh", age: 30 },
  { firstName: "Arjun", lastName: "Mehta", age: 27 }
];

// find unique age only

//{28: 2, 24: 1, 30:1, 27:1 }

const a = users.reduce((acc, curr) => {
    if (!acc[curr.age]) {
        acc[curr.age] = 1;
    } else {
        acc[curr.age]++
    }
    return acc
}, {})

let uniqueAge = users.filter(ele => a[ele.age] == 1)
console.log(uniqueAge)