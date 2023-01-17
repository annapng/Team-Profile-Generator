const Manager = require('../classes/manager.js');

test('creates object from manager to test', () => {
    const manager = new Manager('Anna', 111, 'probablyannamurphy@gmail.com', 111);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets name from getName()', () => {
    const manager = new Manager('Anna', 111, 'probablyannamurphy@gmail.com', 111);
    expect(manager.getName()).toEqual(expect.any(String));
});

test('gets ID # from getId()', () => {
    const manager = new Manager('Anna', 111, 'probablyannamurphy@gmail.com', 111);
    expect(manager.getId()).toEqual(expect.any(Number));
});

test('gets email from getEmail()', () => {
    const manager = new Manager('Anna', 111, 'probablyannamurphy@gmail.com', 111);
    expect(manager.getEmail()).toEqual(expect.any(String));
});

test('gets officeNumber from getOfficeNumb()', () => {
    const manager = new Manager('Anna', 111, 'probablyannamurphy@gmail.com', 111);
    expect(manager.getOfficeNumb()).toEqual(expect.any(Number));
});

test('gets role from getRole()', () => {
    const manager = new Manager('Anna', 111, 'probablyannamurphy@gmail.com', 111);
    expect(manager.getRole()).toEqual(expect.any(String));
});