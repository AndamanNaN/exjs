function deepEqual(a1, a2){

}

const a1 = [1, 2, [3, 4], 5];
const a2 = JSON.parse(JSON.stringify(a1)); // Deep copy
//a1 === a2; // => false
deepEqual(a1, a2); // => true