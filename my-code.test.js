const { sum, inOneHour } = require('./my-code');

describe('math functions', () => {

    beforeAll(()=>{
        console.log('before all')
    })

    beforeEach(()=>{
        console.log('before each')
    })

    it('sums 2 numbers', () => {
        expect(sum(3,4)).toBe(7);
    })

    it('sums another numbers', () => {
        expect(sum(3,4)).toBe(7);
    })

    afterAll(()=>{
        console.log('after all')
    })

    afterEach(()=>{
        console.log('after each')
    })


})

describe('date functions', () => {

    it('returns the time for 1 hour ahead', () => {
        // armazena o real para voltar depois
        const realDate = Date.now.bind(global.Date)
        global.Date.now = () => 0
        expect(inOneHour()).toBe(3600000);
        //voltando depois
        global.Date.now = realDate;
        console.log(global.Date.now())
    })

})
