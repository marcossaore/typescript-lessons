// boolean
let isOpen: boolean

isOpen = false
isOpen = true

// string ( 'foo', "foo", `foo` )
let message : string
message = `foo ${isOpen}`

// number ( int , float, hex, binary)
let total : number
total = 0xff0
total = 1
total = 1.5

// array (type[])
let items: number[]
items = [1, 2, 3]

let values : Array<string> //GENERIC
values = ["foo", "bar"]

// tuple
let title: [number, string]
title = [1, "foo"]

let title2: [number, string, string]
title2 = [1, "foo", "bar"]

//enum -> eumanrator (chave/valor)
enum Colors {
    white = '#fff',
    black = "#000"
}

Colors.white
Colors.black

//any -> NÃO É UMA BOA ESTRATÉGIA
let any : any
any = true
any = []
any = "ok"
any = Colors.white


//void
function logger () {
    console.log('foo')
}


//null |  undefined (NÃO É MUITO ACONSELHADO USAR)
let nullOrUndefined: null;
// nullOrUndefined =  undefined

//never -> tipo que nunca vai retornar
function error() : never {
    throw new Error("error")
}

// object (qualquer coisa que não seja um tipo primitivo) 
let cart : object

// cart = true; // error
// cart = "hello" // error

cart = {
    key: 'value'
}

// TYPE INFERENCE
let message2 = "mensagem definida"

//(e : MouseEvent) 
window.addEventListener("click", (e) => {
    console.log(e.target)
    // console.log(e.foo) -> "it not exists"
})