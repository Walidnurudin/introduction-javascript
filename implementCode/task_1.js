function Palindrome(teks) {
  if(typeof teks !== "string"){
    return "Hanya menerima string"
  }

  let x = teks.length - 1;
  let hasil = "";

  for (let i = 0; i <= x; x--) {
    hasil = hasil + teks[x];
  }

  return hasil.toLocaleLowerCase() === teks.toLocaleLowerCase();
};

console.log(Palindrome("oke"))

