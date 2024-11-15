function A(b,c) {
  return b+c;
}

let a = {
  A:A
}

console.log(a);
console.log(a.A);
console.log(a.A("b","c"));