import React from 'react';

function Meme(props) {   

    return (
        <div className="meme">
            <img
                src={props.state.randomImg}
                alt="the meme"
            />
            <h2 className="top">{props.state.topText}</h2>
            <h2 className="bottom">{props.state.bottomText}</h2>
        </div>
    );

}

export default Meme;