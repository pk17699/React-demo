/* function Profile(props){
    return (
        <div>
            <h2>Second Component</h2>
            <div>Hello {props.name}</div>
        </div>
    );
}
export default Profile; */

/* import React from 'react';
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1,
        };
        this.increaseCount = this.increaseCount.bind(this);
    }
    increaseCount(){
        this.setState((state)=>({
            count: state.count + 1,
        }))
    }
    render(){
        return(
            <>
                <div>Hello {this.props.name}</div>
                Profile count = {this.state.count}
                <button onClick={this.increaseCount}>count</button>
            </> 
        );
    }
}
export default Profile; */

function Profile(props){
    return (
        <div>
            <h2>Welcome {props.name}</h2>
        </div>
    );
}
export default Profile;