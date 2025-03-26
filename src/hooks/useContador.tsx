import { useState } from "react";

export const useContador = () => {

    const value = 10;

    const [ contador, setContador ] = useState( value );

    const add = () => setContador( contador + 1 );
    const decrement = () => setContador( contador - 1 );
    const reset = () => setContador( value );

    return { contador, add, decrement, reset };

}
