/* function Home(props){
    return(
        <div>you have purchase {props.count} items</div>
    );
}
export default Home; */

/* import React from "react";

function myAlert(){
    alert('you just clicked button');
}

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <p>You have purchased {this.props.count} items</p>
                <button onClick={myAlert}>button</button>
            </div>
        );
    }
} */

import { useState } from "react";
function Home(){
    const [count, setCount] = useState(0);

    function increaseCount(){
        setCount(count + 1);
    }
    function decreaseCount(){
        setCount(count - 1);
    }
    function myAlert(){
        alert('you have purchased ' + count + ' products');
    }
    return (
        <div>
            <p>Add product in cart : {count} items</p>
            <button onClick={increaseCount}>Add items</button>
            <br/>
            <button onClick={decreaseCount}>Remove items</button>
            <br/>
            <button onClick={myAlert}>Buy</button>
        </div>
    )
} 
export default Home;