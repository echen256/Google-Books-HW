import React, { Component } from 'react';
import axios from 'axios';
import mongodb from 'mongodb';
import { Book } from './Book'
import API from'./../utils/API.js';

export class SavedPage extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        books: []
    }
    


    componentDidMount = () => {
        this.update();
    }

    update = () => {
        API.getBooks()
        .then(res =>
            this.setState({ books: res.data})).catch(err => console.log(err));
    }


    render() {
        return <div>
            <div>
                <a href = "/">Search</a>
                <a href = "/saved">Saved</a>
            </div>
            <div> BOOKS
            <div>
                {
                     this.state.books.map( volumeInfo => <Book searching = {false} volumeInfo={volumeInfo} update = {this.update}/>)
                }
            </div>

            </div>

        </div>
    }


}