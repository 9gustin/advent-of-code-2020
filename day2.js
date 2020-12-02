const data = require('./data/day2.json');
const POLICIES_CANT = 'POLICIES_CANT';
const POLICIES_POSITION = 'POLICIES_POSITION';

const cantPasswordAreValids = (passwords, policy) => {
    return passwords.reduce((acc, password) => isPasswordValid(password, policy) ? (acc + 1) : acc, 0);
}

const isPasswordValid = (password, policy) => {
    let isValid;

    if (policy === POLICIES_POSITION) {
        let regExpFilter = new RegExp(password.letter, 'g');
        let cantTimes = password.password.match(regExpFilter)?.length;

        isValid = (cantTimes >= password.minCant && cantTimes <= password.maxCant);
    }
    else {
        isValid = ((password.password[(password.maxCant-1)] === password.letter) !== (password.password[(password.minCant-1)] === password.letter));
    }

    return isValid;
}

const partOne = cantPasswordAreValids(data, POLICIES_POSITION);
console.log("🚀 ~ file: day2.js ~ line 26 ~ partOne", partOne);

const partTwo = cantPasswordAreValids(data, POLICIES_CANT);
console.log("🚀 ~ file: day2.js ~ line 29 ~ partTwo", partTwo);
