const fs = require('fs');
const crypto = require('crypto')
const faker = require('faker');

const createUser = (user, secret, message) => {
    const hashedMessage = crypto.createHmac('sha256', secret).update(message).digest('hex');

    const obj = {
        user,
        msg: hashedMessage
    }

    return fs.appendFile('./file.js', "\n" + JSON.stringify([obj], null, 2), 
        (err) => {
            (err)
                ? console.log(error)
                : console.log('User created successfully');
        }
    )
}

const user = {
    name: faker.name.findName(),
    card: faker.helpers.createCard(),
    finance: faker.finance.amount,
    git: faker.git.branch()
};

let message = 'Secret Message, N.G. is in Hungary!';
let secret = 'z.z.s.n.m.k';

for(i=0; i<2; i++) {
    createUser(
        user,
        secret,
        message
    );
}
