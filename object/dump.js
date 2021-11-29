let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];

function dump(obj) {
  console.log(obj);
  let obj2 = Object.assign({}, `firstname: ${obj.firstname}, lastname: ${obj.lastname}, [birthday: ${obj.birthday}]`)
  return obj2;
}

console.log(dump(obj));