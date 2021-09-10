// 1. INCLUDES = memeriksa array/string apakah array/string tersebut berisi data yang dimasukkan
let arrIncludes = ["pagi", "siang", "malam"];
let strIncludes = "Selamat siang";

let resultIcludes = arrIncludes.includes("malam")

console.log(resultIcludes)


// 2. TOUPPERCASE = untuk merubah string ke huruf besar
let name = "Walid Nurudin";
let newName = name.toUpperCase();

console.log(newName)


// 3. TOLOWERCASE = untuk merubah string ke huruf kecil.
let nama = "Walid Nurudin";
let newNama = nama.toLowerCase();

console.log(newNama)


// 4. SLICE = untuk memotong array menjadi array baru.
let arrSlice = ["kucing", "ayam", "bebek"];
let newArrSlice = arrSlice.slice(0, 2);

console.log(newArrSlice)



// 5. PUSH = untuk menambahkan data baru ke akhir array. 
let arrPush = ["TV", "Laptop", "HP"];
let newArrPush = arrPush.push("Komputer");

console.log(arrPush)


// 6. UNSHFT = untuk menambahkan data baru pada pertama array.
let arrUnshift = ["TV", "Laptop", "HP"];
let newArrUnshift = arrUnshift.unshift("Komputer");

console.log(arrUnshift)


// 7. POP = untuk menghapus/mengambil data terakhir pada array.
let arrPop = ["kucing", "ayam", "bebek"];
let newArrPop = arrPop.pop();

console.log(arrPop)
console.log(newArrPop)


// 8. SHIFT = untuk menghapus/mengambil data pertama pada array.
let arrShift = ["kucing", "ayam", "bebek"];
let newArrShift = arrShift.shift();

console.log(arrShift)
console.log(newArrShift)


// 9. CONCAT = untuk menggabungkan 2 array atau lebih.
let arrConcat = ["saya"];
let arrConcat2 = ["kita", "kamu"];
let newArrConcat = arrConcat.concat(arrConcat2);

console.log(newArrConcat)


// 10. DATE = untuk mengembalikan tanggal dan waktu hari ini/sekarang

console.log(Date())