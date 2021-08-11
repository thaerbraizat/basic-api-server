
const logger = require('../src/middleware/logger');

describe('logger middleware', ()=> {
   
    let consoleSpy; 
    let req = {};
    let res = {};
    let next = jest.fn();
    
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })

    afterEach(()=> {
        // put the console back
        consoleSpy.mockRestore();
    })

    it('properly logs some output', ()=> {
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    })
    
    it('moves to the next', ()=> {
        logger(req, res, next);
        expect(next).toHaveBeenCalled()
    })
})