export default class Token {
    static token = "";
    constructor() {}
    static get(){
        return this.token;
    }
    static set(token) {
        this.token = token;
    }
    
}
//const token = "";
