// validasi parameter
// terdapat 2 promo ‘ARKFOOD5’ | ‘DITRAKTIRDEMY’ | false

const arkFood = (harga, voucher, jarak, pajak) => {
    // VALIDASI
    if(typeof harga !== "number"){
        return "Harga harus bertipe data 'number'";
    }

    if(typeof voucher !== "string"){
        return "Voucher harus bertipe data 'string'";
    }

    if(typeof jarak !== "number"){
        return "jarak harus bertipe data number";
    }

    if(typeof pajak !== "boolean"){
        return "Pajak harus bertipe data 'boolean'";
    }

    // VOUCHER
    // if(voucher === "ARKFOOD5"){
    //     return "voucher arkafood"
    // }else if(voucher === "DITRAKTIRDEMY"){
    //     return "voucher ditraktirdemy"
    // }else{
    //     return "voucher false"
    // }

    // JARAK
    // if(jarak > 2){
    //     let res = jarak - 2;
    //     let harga = res * 3000 + 5000
    //     return harga
    // }else{
    //     let harga = 5000;
    //     return harga;
    // }

    // PAJAK
    if(pajak){
        let hargaPajak = harga * (5/100)
        return harga + hargaPajak
    }
}

console.log(78750 - 37500 + 14000)


console.log(arkFood(75000, "‘ARKFOOD5’", 5, true))