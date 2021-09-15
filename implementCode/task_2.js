function reverseWords(words) {
  if(typeof words !== "string"){
    return "Hanya menerima string"
  }

  let str = words.split(" ");
  let x = str.length - 1;
  let hasil = "";

  for (let i = 0; i <= x; x--) {
    hasil = hasil + str[x] + " ";
  }

  return hasil;
};

console.log(reverseWords("Sedang belajar javascript"))

