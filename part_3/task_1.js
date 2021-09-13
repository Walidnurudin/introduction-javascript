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
cekhariKerja('selasa')
    .then(res => console.log(res))
    .catch(err => console.log(err.message))


// TRY CATCH
async function cek(){
    try {
        const result = await cekhariKerja('sabtu');
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }    
}

cek()