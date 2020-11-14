abstract class UserAccount {
    
    public name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails() : void {
        console.log(`the player ${this.name} is ${this.age} years old!`)
    }
}


class CharAccount extends UserAccount {

    private nickname: string;
    // readonly level : number;

    private level : number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level
    }

    get getLevel() {
        console.log("---------GET--------")
        return this.level
    }

    set setLevel(level: number) {
        console.log("---------SET--------")
        this.level = level
    }

    logCharDetails() : void {
        console.log(`The player ${this.name} is ${this.age} amd has the char ${this.nickname} at level ${this.level}`)
    }
}

// const marcos =  new UserAccount("Marcos", 27);
// console.log(marcos)
// // console.log(marcos.age)
// marcos.logDetails();

const m56 = new CharAccount("Marcos", 27, "m56", 3);

console.log(m56)
// console.log(m56.level)

console.log(m56.setLevel = 8)
console.log(m56.getLevel)


m56.logDetails();

m56.logCharDetails();