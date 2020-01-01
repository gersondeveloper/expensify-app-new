// const person = {
//     name: 'Gerson',
//     age: 48,
//     location: {
//         city: 'Rio de Janeiro',
//         temp: 42
//     }
// }

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`My name is ${firstName} and I'm ${age}`)

// const {city, temp: temperature} = person.location
// console.log(`It's about ${temperature} degrees Celsius here in ${city}`)


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = "Self-Published"} = book.publisher
// console.log(publisherName)


const address = ['1299 S Juniper Street','Philadelphia','Pennsylvania','19147']

const [, city, state = 'New York'] = address
console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)','$2.00','$2.50','2.75']

const [ product, , price ]  = item
console.log(`A medium ${product} costs ${price}`)

