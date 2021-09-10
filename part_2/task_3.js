function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    if(nilaiAwal > nilaiAkhir){
        return "Nilai akhir harus lebih besar dari nilai awal"
    }

    if(dataArray.length < 5){
        return "Jumlah angka dalam dataArray harus lebih dari 5"
    }

    let result = []; 
    dataArray.map((el) => {
        if(el >= nilaiAwal && el <= nilaiAkhir){
            result.push(el)
        }
    })

    if(result.length === 0){
        return "Nilai tidak ditemukan"
    }

    result.sort((a, b) => a - b)

    return result;

}

console.log(seleksiNilai(1, 4, [5, 30, 10, 5, 20]))