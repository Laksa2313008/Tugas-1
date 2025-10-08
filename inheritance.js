class Person {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }

    introduceSelf() {
        return console.log(`Hi I'm ${this.name}`);
    }
}

class Professor extends Person {
    constructor(name, teaches, occupation) {
        super(name, occupation);
        this.teaches = teaches;
    }

    getInformation() {
        return console.log(
            `Hi my name is ${this.name}, and i will be your ${this.teaches} Professor`
        );
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}

let professor = new Professor("Laksa", "Science", "Students");
professor.getInformation();
professor.grade('My Paper');