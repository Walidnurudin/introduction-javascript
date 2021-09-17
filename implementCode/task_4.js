// validasi parameter harus number
// pisah per angka 0
// urutkan angka bredasarkan bilangan-bilangan itu sendiri
// lalu gabungkan tanpa adanya pemisah
// output berupa bilangan integer

const divideAndSort = (num) => {
    if(typeof num !== "number"){
        return "Tipe data harus berupa angka";
    }

    // console.log(BigInt(num))

    let res = num.toString().split(0);

    console.log(res)

    let res2 = [];
    res.map(item => {
        let x = item.split('').sort().join('');
        res2.push(x)
    })

    let result = res2.join('');
    result = parseInt(result)

    return result
}

console.log(divideAndSort(32105409010205));