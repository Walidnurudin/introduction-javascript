const printSegitiga = 5;

if (typeof printSegitiga === "number" && printSegitiga > 0) {
    let result = "";
    for (let i = printSegitiga; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            result += j
        }
        result += "\n"
    }
    console.log(result)
} else {
    console.log("Data harus number dan lebih besar dari 0")
}