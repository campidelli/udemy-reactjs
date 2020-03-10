const person = {
  name: 'Bruno',
  age: 35,
  location: {
    city: 'Auckland',
    temp: 25
  }
};

const { name, age } = person;
console.log(`${name} is ${age}.`);

const { temp: temperature, city } = person.location;
console.log(`It's ${temperature} degrees in ${city}.`);


const book = {
  title: 'O Xango de Baker Street',
  author: 'Jo Soares',
  publish: {
    publisher: 'Cia das Letras',
    year: 1995
  }
};

const { publisher: publisherName = 'Self-published' } = book.publish;
console.log(publisherName);
