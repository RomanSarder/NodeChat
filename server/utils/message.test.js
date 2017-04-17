const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate valid message object ', () => {
        let res = generateMessage('Admin', 'Text');
        expect(res.from).toEqual('Admin');
        expect(res.text).toEqual('Text');
        expect(res.createdAt).toBeA('number');
    });
});
describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let res = generateLocationMessage('Admin', 1, 1);
        expect(res.url).toEqual('https://www.google.com/maps?q=1,1');
        expect(res.from).toEqual('Admin');
        expect(res.createdAt).toBeA('number');
    });
});