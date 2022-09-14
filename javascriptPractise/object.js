// var student = {
//     id: 115,
//     name: 'jbj',
//     class: 9,
//     marks: 90
// }
// var mobile = {
//     brand: nokia,
//     price: 200,

// }

// var computer = {
//     brand: 'lenevo',
//     price: 12200,
//     color: 'black'
// }
// console.log(computer);
// console.log(computer.color);
// console.log(computer.price);
// console.log(computer.brand);
// computer.price = 511111;
// console.log(computer);
// console.log(computer.price);


// var shp = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 3,
//     pen: 25
// }
// var pencount = shp.pen;
// var pencnt2 = shp['pen'];
// var prp = Object.keys(shp);
// var prpvl = Object.values(shp);
// console.log(shp);
// console.log(prp);
// console.log(prpvl);
// console.log(prp, prpvl);

var a = {
    books: 3,
    sunglass: 1,
    kboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
var aItems = ['books', 'sunglass', 'shoes', 'pen'];
var frndage = [12, 45, 7, 8, 12, 3, 2, 14];
const keys = Object.keys(a);
console.log(keys);

for (var i = 0; i < keys.length; i++) {
    var aname = keys[i];
    var avalue = a[aname];
    // console.log(keys[i]);
    console.log(aname, avalue);

}
for (var aname in a) {
    const values = a[aname];
    console.log(aname, values);
}
