// 1
const getCountryName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = false;
            let country = ["Indonesia", "Singapura", "Brunei", "Laos", "Thailand", "Vietnam"];

            if (!err) {
                resolve(country)
            } else {
                reject(new Error("Gagal mendapatkan nama negara"))
            }
        }, 3000)
    })
}

getCountryName()
    .then((res) => {
        res.map(el => console.log(el))
    })
    .catch((err) => console.log(err.message))


// 2
const penjumblahan = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = typeof num1 !== "number" || typeof num2 !== "number";
            let res = num1 + num2;

            if (!err) {
                resolve(res)
            } else {
                reject(new Error("Type data harus berupa angka"))
            }
        }, 4000)
    })
}

penjumblahan(10, 5)
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message))