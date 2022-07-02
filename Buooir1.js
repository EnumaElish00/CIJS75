
let cauMot = "1. False vì Var khai  báo một biến có phạm vi là execution context hiện tại của nó"
console.log(cauMot);

let cauHai = "2. True vì Const khai báo một hằng số có phạm vi trong một block nhất định"
console.log(cauHai);

let cauBa = "3. True vì Let khai báo một biến có phạm vi trong một block scope"
console.log(cauBa);

let cauBon = "4. 3 vì Const mặc dù giá trị không thể gán lại, nó vẫn có thể thay đổi. Ví dụ nếu như giá trị là 1 obj, các thuộc tính của Obj đó có thể thay đổi được "
console.log(cauBon);

let cauNam = "5. 4";
console.log(cauNam);

let cauSau= "6. 1";
console.log(cauSau);

let cauBay = "7. 4 vì không thể thay đổi giá trị của hằng số "
console.log(cauBay)

let cauTam = "8. 2";
console.log(cauTam);

let cauChin = "9. 1"
console.log(cauChin);

let cauMuoi = "10. 2"
console.log(cauMuoi);

let cauMuoiMot = "11. 2"
console.log(cauMuoiMot);

let cauMuoiHai = "12. 2"
console.log(cauMuoiHai);


const users = [
    {name: "Angelina Jolie", age: 8},
    {name: "Eric Jones", age: 2},
    {name: "Paris  Hilton ", age: 5},
    {name: "Kayne West ", age: 8},
    {name: "Bob Ziroll ", age: 8}
]

function creatArray(users) {
    let newArray = users.map((users) => {
        return `<div><h1>${users.name}</h1><h2>${users.age}</h2></div>`
    });
    return newArray;
}

console.log(creatArray(users));


// Bai 2 

const students = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'other' },
]

function bai2(arr = []) {
    return arr.filter((students) => students.gender !== "female");
}

console.log(bai2(students));

// Bai3

strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

const sortStr = (str) => {
    let newStr = str.split("").sort();
    let resut = "";
    for (let i = 0; i < newStr.length; i++) {
      resut += newStr[i];
    }
    return resut;
  };
  
  function anagrams(list = []) {
    if (list.length == 1) return [[list[0]]];
    let memoization = {};
    for (let i = 0; i < list.length; i++) {
      let temp = sortStr(list[i]);
      if (temp in memoization) {
        memoization[temp].push(list[i]);
      } else {
        memoization[temp] = [list[i]];
      }
    }
    return Object.values(memoization);
}

console.log(anagrams(strs));

// Bai4 
let nums = [2, 2, 5, 4, 4];

function bai4(arr = []) {
    if (arr.length == 1) {
         return arr[0];
          }
          let res = arr[0];
          for (let i = 1; i < arr.length; i++) {
         res = res ^ arr[i];
       }
       
     return res;
 }
console.log(bai4(nums));