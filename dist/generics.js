"use strict";
// S -> state
// T -> Type
// K => key
// V => value
// E => element
// P => properties
// padrão string
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
newState.setState("foo");
console.log(newState.getState());
// newState.setState(123)
// console.log(newState.getState())
newState.setState("blah");
console.log(newState.getState());
var newStateNumber = useState();
newStateNumber.setState(23);
console.log(newStateNumber.getState());
