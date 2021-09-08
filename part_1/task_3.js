const printSegitiga = 5;

if(typeof printSegitiga != "number"){
    console.log("Data harus number")
}else{
    let result = "";
    for (let i = printSegitiga; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            result += i
        }
        result += "\n"
    }
    console.log(result)
}