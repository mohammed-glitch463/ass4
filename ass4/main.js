// let student = {
//     name : "mohammed",
//     age : 23,
//     major :"Informatics Engineering", 
// }
// console.log(student);


// let product = {
//     name : "phone",
//     price : "230$",
//     stock : 5,
// }
// product.price = "500$";
// product.stock += 5;
// console.log(product);




// let user = {
//     name : "ali",
//     address : {
//         city : "Taiz",
//         street : "Alhoban street",
//         postelCode: "0000",
//     }
// }

// user.address.city = "Aden",
// console.log(user);

// const bankAccount = {
//   owner: "mohammed",
//   balance: 500,

//   deposit: function(amount) {
//     if (amount <= 0) {
//       console.log("Deposit failed: Amount must be greater than zero");
//       return;
//     }
//     this.balance += amount;
//     console.log(`Successfully deposited $${amount}. New balance: $${this.balance}`);
//   },
//   withdraw: function(amount) {
//     if (amount <= 0) {
//       console.log("Withdrawal failed: Amount must be greater than zero.");
//       return;
//     }
//     if (amount > this.balance) {
//       console.log(`Withdrawal failed: Insufficient funds. Current balance is $${this.balance}.`);
//       return;
//     }
//     this.balance -= amount;
//     console.log(`Successfully withdrew $${amount}. Remaining balance: $${this.balance}`);
//   }
// };

// console.log(`Account Owner: ${bankAccount.owner}`);
// console.log(`Initial Balance: $${bankAccount.balance}\n`);
// bankAccount.deposit(200); 
// bankAccount.deposit(-50); 
// bankAccount.withdraw(150); 
// bankAccount.withdraw(1000); 
// bankAccount.withdraw(-20); 



function inventotySummary(product){
  let toatalValue = 0;
  const lowStock = [];

  for (const x of product){
    toatalValue += product.price * product.stock;

      if (product.stock < 5 ){
      lowStock.push(product.name);
    }

  }
  return {
    toatalValue,
    lowStock,
  }

}


const product = [
  {
    name : "laptop",
    price : 1000,
    stock : 10,
  },
  {
    name : "phone",
    price : 25,
    stock : 3,
  },
  {
    name : "prienter",
    price : 50,
    stock : 6,
  },
  {
    name : "projector",
    price : 200,
    stock : 8,
  },
];
console.log(inventotySummary(product));









function groubStudent(student){
  let group = {};

  for (let x of student){
    let major = x.major;

    if (!group[major]){
      group[major] = [];
    }

    group[major].push(x);
  }

  return group;
}

let student = [
  {
    name: "mohammed",
    major : "it",
  },
  {
    name: "ali",
    major : "art",
  },
  {
    name: "ahmed",
    major : "science",
  },
  {
    name: "khaled",
    major : "math",
  },
]

console.log(groubStudent(student));