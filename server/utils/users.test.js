const expect = require('expect');

const { Users } = require('./users');
let users;
beforeEach(() => {
    users = new Users();
    users.users = [{
        id: 1,
        name: 'Mike',
        room: 'Node'
    }, {
        id: 2,
        name: 'Jen',
        room: 'React'
    }, {
        id: 3,
        name: 'Julie',
        room: 'Node'
    }];
});
describe('Users', () => {
    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: 123,
            name: 'Roman',
            room: 'Office'
        };
        let res = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });
    it('should return names for node course', () => {
        let userList = users.getUserList('Node');
        expect(userList).toEqual(['Mike', 'Julie']);
    });
    it('should return names for React course', () => {
        let userList = users.getUserList('React');
        expect(userList).toEqual(['Jen']);
    });
    it('should remove user', () => {
        let userId = 1;
        let user = users.remove(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });
    it('should not remove user', () => {
        let userId = 999;
        let user = users.remove(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });
    it('should find user', () => {
        let userId = 2;
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });
    it('should not find user', () => {
        let userId = 333;
        let user = users.getUser(userId);

        expect(user).toNotExist();
    });
});