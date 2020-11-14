
//type Alias
type Uid =  number | string

//Type Union: could receive a number or a string
// function logDetails (uid: number | string, item: string) {
//     console.log(`A product with ${uid} has a title as ${item}`)
// }

// function logInfo(uid: number | string, user: string) {
//     console.log(`A user with ${uid} has a name as ${user}`)
// }

function logDetails (uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}`)
}

function logInfo(uid: Uid, user: string) {
    console.log(`A user with ${uid} has a name as ${user}`)
}

type Platform = 'Windows' | 'Linux' |  'Mac Os'

function renderPlatform(platform: Platform){
    return platform;
}

//renderPlatform("android") //doenst work
renderPlatform("Mac Os")

logDetails(123, "gravata")
logDetails("321", "sapato")

logInfo("123", "Marcos")
logInfo(123, "Marcos")