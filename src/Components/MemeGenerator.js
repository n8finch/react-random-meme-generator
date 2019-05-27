import React from 'react';
import MemeForm from './MemeForm';
import Meme from './Meme';

class MemeGenerator extends React.Component {

    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            memeUrl: '',
            allMemeImgs: [],
            randomImg: 'https://i.imgflip.com/1ur9b0.jpg'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json() )
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            });

    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    render() {
        return (
            <div>
                <MemeForm 
                    state={this.state}
                    change={this.handleChange}
                    submit={this.handleSubmit}
                />
                <Meme 
                    state={this.state}
                />
            </div>
        );
    }
}

export default MemeGenerator;