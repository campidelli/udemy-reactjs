class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${ this.name } and I am ${ this.age } years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    getGreeting() {
        return super.getGreeting() + ` My major is ${ this.major }`;
    }

    hasMajor() {
        return !!this.major;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        return super.getGreeting() + ` I am visiting from ${ this.homeLocation }`;
    }
}

const me = new Person('Bruno', 35);
console.log(me.getGreeting());

const anonoymous = new Student(undefined, 25, 'Computer Science');
console.log(anonoymous.getGreeting());
console.log(anonoymous.hasMajor());

const pham = new Traveler('Phamella', 30, 'Sao Paulo');
console.log(pham.getGreeting());
