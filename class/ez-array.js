class EZArray extends Array {
    #first;
    #last;

    constructor(array) {
        console.log(array);
        super();
        // this.#first = array[0];
        // this.#last = array.length;
    }
    
    get first() { return this.#first; }
    get last() { return this.#last; }
}

let a = new EZArray();
console.log(a instanceof EZArray);
console.log(a instanceof Array);
a.push(1,2,3,4);
console.log(a);
a.pop();
console.log(a);
console.log(a.first);
console.log(a.last);
console.log(a[1]);
console.log(Array.isArray(a));
console.log(EZArray.isArray(a));
