import { useReducer } from "react";

interface AuthState{
    count:  number;
}

export const useReducerContador = () => {

    const initialState: AuthState = {
        count: 10,
    }

    type Action = 
        | { type: "add" } 
        | { type: "decrement" } 
        | { type: "decrement2" } 
        | { type: "reset" }
        | { type: "add2" };

    const counterReducer = ( state: AuthState, action: Action ) => {
        switch( action.type ){
            case 'add':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            case 'decrement2':
                return { count: state.count - 2 }
            case 'reset':
                return { ...initialState }
            case 'add2':
                return { count: state.count + 2 }
        }
    }

    const [ estado, dispatch ] = useReducer( counterReducer, initialState );

    const add = () => dispatch({ type: "add" });
    const add2 = () => dispatch({ type: "add2" });
    const decrement = () => dispatch({ type: "decrement" });
    const decrement2 = () => dispatch({ type: "decrement2" });
    const reset = () => dispatch({ type: "reset" });

    return {
        estado,
        add,
        add2,
        decrement,
        decrement2,
        reset
    }

}
