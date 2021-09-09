const name = ['Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]


function searchName(key, limit, cb) {
    let newName = [];
    name.map(el => {
        if (el.toLowerCase().includes(key)) {
            newName.push(el)
        }
    });

    cb(newName, limit);
}

function limitData(data, limit){
    const result = data.slice(0, limit);
    console.log(result);
}

searchName("an", 3, limitData)