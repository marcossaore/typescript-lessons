interface Game {
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];
    getSimilars?: (title: string) => void        
}

const tlou : Game = {
    title: "The last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A plague tale, Metro`)
    }
}

console.log(tlou.title)
console.log(tlou.genre)

// tlou.genre = "horror";
// type guard
if(tlou.getSimilars){
    tlou.getSimilars(tlou.title);
}

interface DLC extends Game {
    originalGame: Game,
    newContent: string[]
}

const leftBehind: DLC = {
    title: "The last of Us - Left Behind",
    description: "you play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story"]
}

console.log(leftBehind)

class CreateGame implements Game {

    title: string;
    description: string;
    genre: string;

    constructor(t: string, d: string, g: string){
        this.title = t;
        this.description = d;
        this.genre = g;
    }

}