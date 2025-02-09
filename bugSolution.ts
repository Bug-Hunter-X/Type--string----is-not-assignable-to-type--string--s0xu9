function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
// Solution 1: Modify the greeter function
function greeterArray(persons: string[]) {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user)); //This works
// Solution 2: Use only one string from the array
console.log(greeter(user[0])); //This works