//accountInfo
//charInfo
// PlayerInfo

type AccountInfo = {
    id: number,
    name: string,
    //optional
    email?: string
}

const account : AccountInfo = {
    id: 1,
    name: "Marcos",
    email: "ms@smail.com"
}

type CharInfo = {
    nickname: string,
    level: number
}

const char: CharInfo = {
    nickname: "ms56",
    level: 3
}

// união do tipo AccountInfo e CharInfo (intersection)
type PlayerInfo = AccountInfo & CharInfo;

const player : PlayerInfo = {
    nickname: "ms56",
    id: 1,
    level: 3,
    name: "Marcos"
}