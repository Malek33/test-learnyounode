let e = 0;
let a = process.argv;
for (let i = 2; i < a.length; i++) {
    e = e + Number(a[i])
};
console.log(e);