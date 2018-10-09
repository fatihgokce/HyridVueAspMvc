export default class User {
    constructor(obj) {
        //console.log("in consructor:"+JSON.stringify(obj));
        this.id;
        this.username;
        this.address;
        this.phone;
        for (var prop in obj) {
            this[prop] = obj[prop];
        }
    }
}
