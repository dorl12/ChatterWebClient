export default class Server {
    static server = "7267";
    constructor() {}
    static get(){
        return this.server;
    }
    static set(server) {
        this.server = server;
    }
    
}
