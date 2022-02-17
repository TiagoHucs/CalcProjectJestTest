
const sum = (a,b) => {
    return a + b;
}

const inOneHour = () => {
    const now = Date.now();
    const onHourInMili = 1 * 60 * 60 * 1000;
    return now + onHourInMili;
}

console.log(inOneHour())


module.exports = { sum, inOneHour }
