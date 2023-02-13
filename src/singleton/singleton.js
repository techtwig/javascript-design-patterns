class Singleton {
    static instance = null;

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }

        return Singleton.instance;
    }

    static getInstance() {
        if (!Singleton.instance) {
            return new Singleton();
        }

        return Singleton.instance;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2)
console.log(instance1 === Singleton.getInstance())