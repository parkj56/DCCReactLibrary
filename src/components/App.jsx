import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';

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

    goToNextBook=() => {
        let tempBookNumber= this.state.booknumber;
        tempBookNumber++;
        if(tempBookNumber=== this.books.length){
            tempBookNumber= 0;
        }
        this.setState({
            booknumber: tempBookNumber
        });
    }

    goToPreviousBook= () => {
        let tempBookNumber= this.state.booknumber;
        tempBookNumber--;
        if(tempBookNumber<0){
            tempBookNumber= this.books.length -1;
        }
        this.setState({
            booknumber: tempBookNumber
        })

    }

    render(){
        return(
            <div className= 'container-fluid'>
                <TitleBar />
                <BookViewer book={this.books[this.state.booknumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook}/>
            </div>
        )
    }
}
export default App;