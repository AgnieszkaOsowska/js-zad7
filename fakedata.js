const names = [
    { name: 'Andrzej', sex: 'm'},
    { name: 'Gienek', sex: 'm'},
    { name: 'Brajan', sex: 'm'},
    { name: 'DĹźesika', sex: 'w'},
    { name: 'GraĹźyna', sex: 'w'},
    { name: 'AndĹźela', sex: 'w'},
    { name: 'Piter', sex: 'm'},
    { name: 'Janusz', sex: 'm'},
    { name: 'BoĹźydar', sex: 'm'},
    { name: 'Ivanka', sex: 'w'}
];
const surnames = [
    'Kowalski',
    'Wolfeschlegelsteinhausenbergerdorff',
    'Trump',
    'Smith',
    'Kowalska',
    'PokoksiĹska',
];
const positions = [
    'magazynier',
    'kierowca',
    'staĹźysta',
    'kierownik'
];
const cities = [
    'BiaĹystok',
    'Warszawa',
    'Lublin',
    'SuwaĹki',
    'WrocĹaw',
    'PoznaĹ'
];
const streets = [
    'Wiejska',
    'Miejska',
    'Trawiasta',
    'Drzewiasta',
    'LiĹciasta',
    'LeĹna'
];

function setSex(data) {
    if (data === "w") {
        return "kobieta";
    } else if(data === "m") {
        return "mÄĹźczyzna";
    }
}

function setSurname(data) {
    if (data === "m") {
        return surnames[Math.floor(Math.random() * 3) + 1];
    } else if (data === "w") {
        return surnames[Math.floor(Math.random() * (5 - 3 + 1)) + 3];
    }
}

function createFakeEmployees() {
    const data = { fakeEmployees: [] }
    
    for (let i = 0; i < 10; i++) {
        const ii = i+1;
        const id = (ii*27) + ii/i;
        const jobSeniority = Math.floor(Math.random() * (13 - 5 + 1)) + 5;
        const zipcode = Math.floor(Math.random() * 5) + 1;
        const salary = Math.floor(Math.random() * (100 - ii + 1)) + i;
        data.fakeEmployees.push({ 
            id: ii, 
            name: names[i].name,
            surname: setSurname( names[i].sex ),
            sex: setSex( names[i].sex ),
            address: {
                street: streets[(Math.floor(Math.random() * 5) + 1)],
                streetNumber: Math.floor(Math.random() * (100 - ii + 1)) + ii,
                apartmentNumber: Math.floor(Math.random() * (100 - ii + 1)) + ii,
                zipcode: `${i}${zipcode+1}${i}${zipcode}0`,
                city: cities[(Math.floor(Math.random() * 5) + 1)]
            },
            position: positions[Math.floor(Math.random() * 5)],
            salary: (Math.random() * (salary*zipcode) * 109).toFixed(2),
            jobSeniority: `${jobSeniority} lat`
        })
    }
    return data;
}

const data = createFakeEmployees();


module.exports = () => data;