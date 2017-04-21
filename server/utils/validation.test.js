const expect = require('expect');
const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non string values', () => {
        expect(isRealString('')).toBe(false);
        expect(isRealString('  ')).toBe(false);
        expect(isRealString(123)).toBe(false);
    });
    it('should proceed string values', () => {
        expect(isRealString('  f')).toBe(true);
        expect(isRealString('bb')).toBe(true);
    })
});