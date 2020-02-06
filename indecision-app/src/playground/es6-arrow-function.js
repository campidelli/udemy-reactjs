const square = function(x) {
    return x * x;
}

const squareArrow = (x) => {
    return x * x;
}

const squareArrow2 = (x) => x * x;


console.log(squareArrow2(3));


const getFirstName = (fullName) => fullName.split(' ')[0];
console.log('First name', getFirstName('Bruno Campidelli'));
