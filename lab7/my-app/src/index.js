import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeter from './Greeter'
import LikeButton from './LikeButton'
import * as serviceWorker from './serviceWorker';
const Display = () => {
    //loops through an array of 0 10x so the likebutton
    //displays 10 times, and we assign a unique key to each child
    //so there will be minimal DOM changes for React to handle
    return (<React.Fragment>
            <Greeter />
            <ul>
                {[...Array(10)].map((x,i) => {
                    return <LikeButton key ={i}/>;
                })}
            </ul>
           </React.Fragment>)
};

ReactDOM.render(
<Display />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
