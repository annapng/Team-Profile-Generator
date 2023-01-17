const Intern = require('../classes/intern.js');

test('creates object from intern to test', () => {
    const intern = new Intern('Anna', 111, 'probablyannamurphy@gmail.com', 'DU');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets name from getName()', () => {
    const intern = new Intern('Anna', 111, 'probablyannamurphy@gmail.com', 'DU');
    expect(intern.getName()).toEqual(expect.any(String));
});

test('gets ID # from getId()', () => {
    const intern = new Intern('Anna', 111, 'probablyannamurphy@gmail.com', 'DU');
    expect(intern.getId()).toEqual(expect.any(Number));
});

test('gets email from getEmail()', () => {
    const intern = new Intern('Anna', 111, 'probablyannamurphy@gmail.com', 'DU');
    expect(intern.getEmail()).toEqual(expect.any(String));
});

test('gets school from getSchool()', () => {
    const intern = new Intern('Anna', 111, 'probablyannamurphy@gmail.com', 'DU');
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('gets role from getRole()', () => {
    const intern = new Intern('Anna', 111, 'probablyannamurphy@gmail.com', 'DU');
    expect(intern.getRole()).toEqual(expect.any(String));
});