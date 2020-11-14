//class decorator


//Factory
function Logger(prefix: string) {
    return (target: any) => {
        console.log(`${prefix} - ${target}`)
    }
}


@Logger("awesome")
class Foo {

    private target: any;

    constructor(target: any) {
        this.target = target
    }
}

//class decorator complex

function setAPIVersion (apiVersion: string) {
    return (constructor:  any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

//decorator - anotar a versão da API
@setAPIVersion("1.0.0")
class API {

}

console.log(new API())


// property decorator

function minLength (length: number) {
    return (target: any, key: string) => {
        let val = target[key];

        const getter = () => val;

        const setter = (value: string) => {
            if(value.length < length){
                console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}.`)
            }else{
                val = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });

    }
}

class Movie {
    // validação - se for menor que 5 -  error
    @minLength(5)
    title: string;

    constructor(t: string){
        this.title = t;
    }
}

const movie = new Movie("Interstellar");
console.log(movie)


//Method decorator

function delay (time: number) {

    return (target : any, key: string, descriptor: PropertyDescriptor) => {

        const originalMethod =  descriptor.value;

        descriptor.value = function(...args : any) {
            console.log(`Esperando ${time} segundos!`)
            setTimeout(() => {
                originalMethod.apply(this, args, time);
            }, time * 1000)
        }

        return descriptor;
    }
}

class Greeter {
    greeting: string;

    constructor(g: string){
        this.greeting = g;
    }

    // esperar um tempo e rodar o método 
    @delay(10)
    // debounce -> espera 300 ms para fazer um novo request
    greet() {
        console.log(`Hello! ${this.greeting}`)
    }
}

const pessoinha = new Greeter("Pessoinha!")
pessoinha.greet();