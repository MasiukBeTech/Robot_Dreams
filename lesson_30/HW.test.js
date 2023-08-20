const appObj = require('./HW');

test('adds # + # to equal ##', () => {
    expect(appObj.sharp()).toBe('####');
});

describe('test sum arrive function', () =>{
    it('should return 11 when params are 8 and 3', () => {
        expect(appObj.calculateSum([8, 3])).toBe(11);
    });
});


describe('calculateSum and myArrayMax and myArrayMin', () => {
    let x;
    beforeEach(() => {
        x = [50, 330, null, 5, '20', 70, false, 4, 10, 100];
    });
    it('should return the max number in an array', () => {
        const max = appObj.myArrayMax(x);
        expect(x).toContain(max);

        // Змінюємо значення в масиві
        x.push(200);
        const newMax = appObj.myArrayMax(x);
        expect(x).toContain(newMax);
        expect(newMax >= max || newMax === Math.max(...x)).toBeTruthy();
    });
    it('should return the min number in an array', () => {
        const min = appObj.myArrayMin(x);
        expect(x).toContain(min);
    
        // Змінюємо значення в масиві
        x.pop(2);
        const newMin = appObj.myArrayMin(x);
        expect(x).toContain(newMin);
        expect(newMin <= min || newMin === Math.min(...x)).toBeTruthy();
    });
    it('should return sum', () => {
        const sum = appObj.calculateSum(x);
        expect(sum).toEqual(50 + 330 + 5 + 70 + 4 + 10 + 100);
    });
});

describe('CancelableAccumulator', () =>{
    it('should return 6 when params 5', () => {
        const num = new appObj.CancelableAccumulator(10);
        const result1 = num.increment();
        expect(result1).toBe(11);
        const result2 = num.decrement();
        expect(result2).toBe(9);
        const result3 = num.clear();
        expect(result3).toBe(10);
    });
});





describe('handleImageClick', () =>{
    it('should handle image clicks', () => {
        const querySelectorAllMock = jest.spyOn(global.document, 'querySelectorAll');
        querySelectorAllMock.mockImplementation(() => [
          { classList: { add: jest.fn() }, addEventListener: jest.fn() },
          { classList: { add: jest.fn() }, addEventListener: jest.fn() }
        ]);
    
        // Викликаємо функцію обробки кліків на зображеннях
        appObj.handleImageClick();
    
        // Перевірка, чи відповідна функція була викликана з очікуваними аргументами
        expect(querySelectorAllMock).toHaveBeenCalledWith('main img');
    
        querySelectorAllMock.mockRestore();
      });
});
