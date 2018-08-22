let pi = 3.14;
// create Object
let obj = {};
obj.updateData = ()  =>{
  console.log("Update Data!");
}

obj.deleteData = () =>{
  console.log("Delete Data!");
}

let update = () => {
  return "Updated!";
}

let add = (a,b) =>{
  return a + b;
}

exports.pi = pi;
exports.update = update;
exports.add = add;
exports.obj = obj;
