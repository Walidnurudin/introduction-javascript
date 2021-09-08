const bahasaIndonesia = 90;
const bahasaInggris = 89;
const mtk = 80;
const ipa = 69;

if (
    typeof bahasaIndonesia !== "number" ||
    typeof bahasaInggris !== "number" ||
    typeof mtk !== "number" ||
    typeof ipa !== "number"
) {
    console.log("Hanya menerima type data 'number'")
} else {
    const rataRata = (bahasaIndonesia + bahasaInggris + mtk + ipa) / 4;
    let Grade = "";

    if (rataRata >= 90) {
        Grade = "A"
    } else if (rataRata >= 80) {
        Grade = "B"
    } else if (rataRata >= 70) {
        Grade = "C"
    } else if (rataRata >= 60) {
        Grade = "D"
    } else if (rataRata >= 0) {
        Grade = "E"
    } else {
        Grade = "Grade not found";
    }

    console.log(`Rata-rata = ${rataRata}, Grade = ${Grade}`);
}