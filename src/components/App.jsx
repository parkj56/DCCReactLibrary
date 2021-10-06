import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props){
        super(props);
        this.books= [
            {title: 'ready Player One', author: 'Ernest Cline'},
            {title: 'All The Light We Cannot See', author: 'Anthony Doerr'},
            {title: 'The First And Last Freedom', author: 'Jiddu Krishnamurit'}
        ]
        this.state={
            booknumber:0
        };
    }
    render(){
        return(
            <div className= 'container-fluid'>
                <TitleBar />
                <div className= 'row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <h1>{this.books[this.state.booknumber].title}</h1>
                        <h4>{this.books[0].author}</h4>
                    </div>
                        <div className='col-md-4'></div>
                    </div>
 
            </div>
        )
    }
}
export default App;