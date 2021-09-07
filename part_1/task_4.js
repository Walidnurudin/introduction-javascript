let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

data = { ...data, name: "Walid nurudin", email: "walidnurudin47@gmail.com", hobby: ["main game", "futsal", "mendengarkan musik"] };
const { street, city } = data.address;

console.log(data);
console.log(street, city);