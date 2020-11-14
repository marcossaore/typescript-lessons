"use strict";
//Type Union: could receive a number or a string
// function logDetails (uid: number | string, item: string) {
//     console.log(`A product with ${uid} has a title as ${item}`)
// }
// function logInfo(uid: number | string, user: string) {
//     console.log(`A user with ${uid} has a name as ${user}`)
// }
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item);
}
function logInfo(uid, user) {
    console.log("A user with " + uid + " has a name as " + user);
}
function renderPlatform(platform) {
    return platform;
}
//renderPlatform("android") //doenst work
renderPlatform("Mac Os");
logDetails(123, "gravata");
logDetails("321", "sapato");
logInfo("123", "Marcos");
logInfo(123, "Marcos");
