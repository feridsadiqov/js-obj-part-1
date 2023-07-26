// const student = {
//     firstName: "David Rayy",
//     class:"IV",
//     rullon:"12"
// };
// console.log(student)

//////////////////////////

// var library = [
//     {
//     title: 'The Road Ahead',
//     author: 'Bill Gates',
//     libraryID: 1254
//     },
//     {
//     title: 'Walter Isaacson',
//     author: 'Steve Jobs',
//     libraryID: 4264
//     },
//     {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     libraryID: 3245
//     }];

//     console.log(library.sort((a,b)=>b.libraryID-a.libraryID));

///////////////////////////////////////

// function check(key) {
//     const student = {
//     firstName: "David Rayy",
//     class:"IV",
//     rullon:"12"};
//     let find =student.hasOwnProperty(key)
//     return find

// }

// console.log(check("firstName"))
// console.log(check("Name"))

////////////////////////////////////////

// String.prototype.sub_String = function () {
//   var subset = [];
//   for (var i = 0; i < this.length; i++) {
//     for (var n = i + 1; n < this.length + 1; n++) {
//       subset.push(this.slice(i, n));
//     }
//   }
//   return subset;
// };
// console.log("dog".sub_String());

/////////////////////////////////////////

function reverseValue(obj) {
  const opposite = {};
  for (const key in myObj) {
    opposite[obj[key]] = key;
  }
  return opposite;
}
const myObj = {
  firstName: "David Rayy",
  class: "IV",
  rullon: "12",
};
console.log(reverseValue(myObj))