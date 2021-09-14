const cekhariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
                return item === day
            });

            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

// THEN CATCH 
// untuk mengatasi error pada promise. then untuk mengolah hasil resolve dan catch untuk mengolah hasil reject.

cekhariKerja('selasa')
    .then(res => console.log(res))
    .catch(err => console.log(err.message))


// TRY CATCH 
// untuk mengatasi error pada async/await. blok try akan akan mengeksekusi dan blok catch akan dieksekusi jika blok try gagal/error.

async function cek(day){
    try {
        const result = await cekhariKerja(day);
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }    
}

cek("selasa")