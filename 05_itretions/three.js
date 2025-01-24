// for of loop get values

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6, 7]

for (const no of arr) {
    //console.log(no);
}

const greetings = "Hello_world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set('ja',"Japan")


console.log(map);

for (const [key , value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

