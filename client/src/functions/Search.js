import React, { Component } from 'react';
import axios from 'axios';
import { Book } from './Book'
import API from './../utils/API.js';

export class Search extends Component {

    constructor(props) {
        super(props);

        this.search = this.search.bind(this)
    }

    state = {
        books: []
    }

    update = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })).catch(err => console.log(err));
    }



    search(event) {
        event.preventDefault();
        var self = this;
        var data = new FormData(event.target);
        axios({
            url: "https://www.googleapis.com/books/v1/volumes?q=" + data.get("search"),
            method: "GET"
        }).then(function (res) {
            var volumes = res.data.items;
            var length = Math.min(volumes.length, 10);
            var newBookList = [];
            for (var i = 0; i < length; i++) {
                var item = volumes[i];
                item.volumeInfo.id = item.id;
                newBookList.push(item);
            }


            self.setState({ books: newBookList });
        });
    }

    render() {
        return <div>
            <div>
                <div>
                    <a href="/">  Search  </a>
                </div>
                <div>
                    <a href="/saved">Saved</a>
                </div>

            </div>
            <div><form onSubmit={this.search}>
                <label> Search</label>
                <input type="text" id="serach" name="search"></input>
                <input type="submit"></input>
            </form> </div>

            <div> BOOKS
            <div>
                    {
                        this.state.books.map(book => <Book searching={true} volumeInfo={book.volumeInfo} update={this.update} />)
                    }
                </div>

            </div>

        </div>
    }


}