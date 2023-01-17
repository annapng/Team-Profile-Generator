const Engineer = require('../classes/engineer.js');

test('creates object from engineer to test', () => {
    const engineer = new Engineer('Anna', 111, 'probablyannamurphy@gmail.com', 'annapng');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets name from getName()', () => {
    const engineer = new Engineer('Anna', 111, 'probablyannamurphy@gmail.com', 'annapng');
    expect(engineer.getName()).toEqual(expect.any(String));
});

test('gets ID # from getId()', () => {
    const engineer = new Engineer('Anna', 111, 'probablyannamurphy@gmail.com', 'annapng');
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('gets email from getEmail()', () => {
    const engineer = new Engineer('Anna', 111, 'probablyannamurphy@gmail.com', 'annapng');
    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test('gets github from getGithub()', () => {
    const engineer = new Engineer('Anna', 111, 'probablyannamurphy@gmail.com', 'annapng');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('gets role from getRole()', () => {
    const engineer = new Engineer('Anna', 111, 'probablyannamurphy@gmail.com', 'annapng');
    expect(engineer.getRole()).toEqual(expect.any(String));
});