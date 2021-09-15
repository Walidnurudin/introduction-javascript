// validasi parameter harus number
// pisah per angka 0
// urutkan angka bredasarkan bilangan-bilangan itu sendiri
// lalu gabungkan tanpa adanya pemisah
// output berupa bilangan integer 

const divideAndSort = (num) => {
    if(typeof num !== "number"){
        return "Tipe data harus berupa angka";
    }

    let res = num.toString().split(0);

    let res2 = [];
    
    res.map(item => {
        let x = item.split('').sort();
        res2.push(x.join(''))
    })

    let result = res2.join('')

    return parseInt(result);
}

console.log(divideAndSort(987012303210879));