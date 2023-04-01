import React from "react";

export default function List(){

    

    const numbers = [1,2,3,4,5]
    const list = numbers.map((item) => (<li  key = {item} > {item}</li>));
    return(
        <ul> {list} </ul>
    );
}