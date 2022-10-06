const {sum} = require("../UnitTestingAndErrorHandlingLab/4.Sum of Numbers");
describe('sum', ()=>{
    it('should return correct result with array of numbers'),()=>{
        //arrange
        let array = [1, 2, 3, 4];
        //act
        let result = sum(array);
        //assert
        expect(result).to.be.equal(10)
    }
})