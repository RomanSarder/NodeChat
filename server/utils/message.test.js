const expect = require('expect');
const { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate valid message object ', () => {
        let res = generateMessage('Admin', 'Text');
        expect(res.from).toEqual('Admin');
        expect(res.text).toEqual('Text');
        expect(res.createdAt).toBeA('number');
    });
});