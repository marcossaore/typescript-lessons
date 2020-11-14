"use strict";
// boolean
var isOpen;
isOpen = false;
isOpen = true;
// string ( 'foo', "foo", `foo` )
var message;
message = "foo " + isOpen;
// number ( int , float, hex, binary)
var total;
total = 0xff0;
total = 1;
total = 1.5;
// array (type[])
var items;
items = [1, 2, 3];
var values; //GENERIC
values = ["foo", "bar"];
// tuple
var title;
title = [1, "foo"];
var title2;
title2 = [1, "foo", "bar"];
//enum -> eumanrator (chave/valor)
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
Colors.white;
Colors.black;
//any -> NÃO É UMA BOA ESTRATÉGIA
var any;
any = true;
any = [];
any = "ok";
any = Colors.white;
//void
function logger() {
    console.log('foo');
}
//null |  undefined (NÃO É MUITO ACONSELHADO USAR)
var nullOrUndefined;
// nullOrUndefined =  undefined
//never -> tipo que nunca vai retornar
function error() {
    throw new Error("error");
}
// object (qualquer coisa que não seja um tipo primitivo) 
var cart;
// cart = true; // error
// cart = "hello" // error
cart = {
    key: 'value'
};
// TYPE INFERENCE
var message2 = "mensagem definida";
//(e : MouseEvent) 
window.addEventListener("click", function (e) {
    console.log(e.target);
    // console.log(e.foo) -> "it not exists"
});
