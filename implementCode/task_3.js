// terdapat 2 promo ‘ARKFOOD5’ | ‘DITRAKTIRDEMY’ | false

const arkFood = (harga, voucher, jarak, pajak) => {
    // VALIDASI
    if (typeof harga !== "number") {
        return "Harga harus bertipe data 'number'";
    }

    if (typeof voucher !== "string" && typeof voucher !== "boolean") {
        return "Voucher harus bertipe data 'string/boolean'";
    }

    if (typeof jarak !== "number") {
        return "jarak harus bertipe data number";
    }

    if (typeof pajak !== "boolean") {
        return "Pajak harus bertipe data 'boolean'";
    }

    let data = {
        harga: harga,
        potongan: 0,
        biayaAntar: 0,
        pajak: 0,
        subTotal: 0
    }

    // VOUCHER
    if (voucher === "ARKFOOD5" && data.harga >= 50000) {
        let diskon = data.harga * (50 / 100);
        data.potongan = diskon > 50000 ? 50000 : diskon;
    } else if (voucher === "DITRAKTIRDEMY" && data.harga >= 25000) {
        let diskon = data.harga * (60 / 100);
        data.potongan = diskon > 25000 ? 25000 : diskon;
    }

    // JARAK
    if (jarak > 2) {
        let temp = jarak - 2;
        data.biayaAntar = temp * 3000 + 5000
    } else {
        data.biayaAntar = 5000;
    }

    // PAJAK
    if (pajak) {
        data.pajak = harga * (5 / 100)
    }

    // TOTAL
    data.subTotal = data.harga - data.potongan + data.pajak + data.biayaAntar;
    return `
        Harga : ${data.harga}
        Potongan : ${data.potongan}
        Biaya Antar : ${data.biayaAntar}
        Pajak : ${data.pajak}
        SubTotal : ${data.subTotal}
    `
}

console.log(arkFood(75000, "ARKFOOD5", 5, true))