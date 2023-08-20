const appObj = require('./app');

test('adds 1 + 2 to equal 3', () => {
  expect(appObj.sum(1, 2)).toBe(3);
});

describe('test run function', () =>{
    it('should return 5 when params are 2 and 3', () => {
        expect(appObj.sum(3, 2)).toBe(5);
    });
    it('should return 10 when params are 2 and 8', () => {
        expect(appObj.sum(8, 2)).toBe(10);
    });
    it('should return 15 when params are 5 and 10', () => {
        expect(appObj.sum(5, 10)).toBe(15);
    });
});


describe('test run function', () =>{
    beforeEach(() => {
        appObj.userFirst.cart = [];
    });
    
    it('should return full name of user', () => {
        expect(appObj.userFirst.getFullName()).toBe('User Surname');
    });
    it('should return full name of user', () => {
        expect(appObj.userFirst.isUserStudent).toBeFalsy();
        expect(appObj.userFirst.universityName).toBeUndefined();
        expect(appObj.userSecond.universityName).toBeTruthy();
        expect(appObj.userSecond.universityName).toContain('Lviv');
    });
    it('should add product to the cart', () => {
        // user.checkUserIsLogged.mockImplementation(() => {
        //     return false;
        // });
        let spyLogger = jest.spyOn(appObj.userFirst, 'checkUserIsLogged');
        appObj.userFirst.addToCart()

        expect(spyLogger).toHaveBeenCalled();
        expect(appObj.userFirst.cart.length).toBe(1);
        expect(appObj.userFirst.cart[0]).toBe('iphone');
    });
});