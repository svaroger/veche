

const NUM_CONTACTS = 10

const firstNames = [ 'Alexandra', 'Ekaterina', 'Galina', 'Anastasia', 'Polina', 'Alisa', 'Margarita', 'Irina', 'Darina', 'Diana', 'Alina', 'Elena', 'Maria', 'Angelina', 'Kristina', 'Kira', 'Valeria', 'Olga', 'Vera', 'Anna', 'Nina', 'Svetlana', 'Tamara', 'Alexandr', 'Dmitry', 'Artem', 'Oleg']

const lastNames = [ 'Alexandrov', 'Eremeev', 'Ganibalov', 'Anisimov', 'Polizaev', 'Alexeenko', 'Margomedov', 'Irinovskiy', 'Darigonov', 'Dimentiev', 'Astrozevich', 'Evkurov', 'Martinov', 'Angirov', 'Krivih', 'Kirpichev', 'Valramov', 'Oduvanov', 'Vernihin', 'Ananiev', 'Nigorin', 'Svetrihov', 'Tamadarov', 'Alexandrovr', 'Dmitriev', 'Artemyev', 'Olennikov']

// generate a random number between min and max
const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

//generate a name
const generateName = () => `${firstNames[rand(firstNames.length - 1)]}
${lastNames[rand(lastNames.length - 1)]}`

//generate a phone number
const generatePhoneNumber = () => `${rand(999, 100)}-${rand(999, 100)}-${rand(9999, 1000)}`

//create a person
const createContact = () => ({
  name: generateName(),
  phone: generatePhoneNumber(),
})

// compare two contacts for alphabetizing
export const compareNames = (contact1, contact2) => contact1.name > contact2.name

// add keys to based on index и тут «(key,»  - это сокращ от «key: key»
const addKeys = (val, key) => ({key, ...val})

// create an array of length NUM_CONTACTS and add addKeys
export default Array.from({length: NUM_CONTACTS}, createContact).map(addKeys)
