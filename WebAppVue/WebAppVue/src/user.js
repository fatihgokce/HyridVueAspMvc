export default class User {
    constructor(obj) {
        this.id;
        this.username;
        this.address;
        this.phone;
        for (var prop in obj) {
            this[prop] = obj[prop];
        }
    }
}
