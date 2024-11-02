class Singleton{
    constructor(){
        /*making sure - class must have only one instance*/
        if(!Singleton.instance){
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    getInstance() {
        return Singleton.instance;
    }
}

const s1 = new Singleton()
const s2 = new Singleton()
/*above s1 and s2 will have same memory address*/
console.log(s1===s2)