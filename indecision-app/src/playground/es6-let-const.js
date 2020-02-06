var nameVar = 'Bruno';
nameVar = 'Campidelli';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Jen';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'mypet';
    return petName;
}
console.log(getPetName());


let bruno;

if (nameConst == 'Jen') {
    bruno = '1';
} else {
    bruno = '2';
}
console.log(bruno);