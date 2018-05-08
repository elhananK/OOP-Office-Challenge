//write your code here to make the tests pass

class Document {
    constructor(name) {
        this.employeeName = name;
    }
};


class Employee {
    constructor(name) {
        this.name = name;
    }

    work(office) {

        for (var i = 0; i < 10; i++) {
            var doc = new Document(this.name);
            office.documents.push(doc);
        }
    }
}
class Cleaner {
    constructor(name) {
        this.name = name;
    }

    clean() {
        console.log('Clean');
    }
}

class Manager {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }

    hireEmployee(emp) {
        var employee = new Employee(emp)
        this.employees.push(employee);
    }

    askEmployeesToWork(office) {

        for (var i = 0; i < this.employees.length; i++) {
            this.employees[i].work(office)
        }

    }
}

class Office {
    constructor() {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }

    hireManager(name) {
        var manager = new Manager(name);
        this.managers.push(manager);
    }
    hireCleaner(name) {
        var clean = new Cleaner(name);
        this.cleaners.push(clean);
    }

    startWorkDay(whichoffice) {
        for (var i = 0; i < this.managers.length; i++) {
             this.managers[i].askEmployeesToWork(this);
        }
    }

}
