const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumb){

        super(name, id, email);
        this.officeNumber = officeNumb;
        this.role = 'Manager';
    }


    getRole() {
        return this.role;
    }; // Overridden to return 'Manager' 

}

module.exports = Manager;