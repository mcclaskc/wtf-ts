type MyObject = {
    [index:string]: MyObject | Function | "wtf"
}

let myObj: MyObject;

// compiles
myObj = {
    name: "wtf",
};

// compiles - note the nested key is `notName:`, instead of `name:`
myObj = {
    wrapper: {
        notName: "wtf",
    },
};

// as soon as I change the nested key to `name:`, it fails to compile:
/*

Type '{ name: string; }' is not assignable to type 'Function | MyObject | "wtf"'.
  Type '{ name: string; }' is not assignable to type '"wtf"'
 
*/
myObj = {
    wrapper: {
        name: "wtf",
    },
};


// Other weirdness, if I remove `Function` from the union, it compiles:
type MyObjectNoFunction = {
    [index:string]: MyObjectNoFunction | "wtf"
}

let myObjNoFn: MyObjectNoFunction = {
    wrapper: {
        name: "wtf"
    }
};

// More weirdness, if I don't include es6 in my tsconfig, everything compiles
