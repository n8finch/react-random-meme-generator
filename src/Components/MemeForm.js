import React from 'react';

function MemeForm(props) {
    
    return (
        <form className="meme-form" onSubmit={props.submit}> 
            <input 
                type="text"
                name="topText"
                placeholder="topText"
                value={props.topText}
                onChange={props.change}
            />
            <input 
                type="text"
                name="bottomText"
                placeholder="bottomText"
                value={props.bottomText}
                onChange={props.change}
            />
            <button>Gen</button>

        </form>
    );
}

export default MemeForm;