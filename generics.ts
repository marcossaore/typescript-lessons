// S -> state
// T -> Type
// K => key
// V => value
// E => element
// P => properties

// padrão string
function useState<S extends number | string = string >() {
    let state: S;

    function getState () {
        return state;
    }

    function setState (newState: S) {
        state = newState;
    }

    return { getState, setState };
}

const newState = useState();


newState.setState("foo")
console.log(newState.getState())

// newState.setState(123)
// console.log(newState.getState())

newState.setState("blah")
console.log(newState.getState())

const newStateNumber = useState<number>();

newStateNumber.setState(23)
console.log(newStateNumber.getState())