/*Observer pattern*/
class Subject {
    constructor(name){
        this.observers = [];
        this.name = name
    }

    subscribe(observer){
        this.observers.push(observer);
    }

    unsubscribe(observer){
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data){
        this.observers.forEach(obs => obs.update(data,this.name));
    }
}

class Observer {
    constructor(name){
        this.name = name
    }
    update(data,subName){
        console.log(`observer ${this.name} received data: ${data} from subject ${subName}`);
    }
}

const s1 = new Subject("subject 1")
const s2 = new Subject("subject 2")
const o1 = new Observer("observer 1")
const o2 = new Observer("observer 2")
const o3 = new Observer("observer 3")

/*subscribe*/
s1.subscribe(o1)
s1.subscribe(o2)
s2.subscribe(o2)
s2.subscribe(o3)

/*notify*/
s1.notify("data 1")
s2.notify("data 2")
