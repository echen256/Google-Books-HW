import React, { Component } from 'react';
import API from './../utils/API.js';
import "./../App.css"



export class Book extends Component {
    state = {
        searching: true,
        volumeInfo: "",
        link : ""
    }

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.setState({ volumeInfo: this.props.volumeInfo, searching: this.props.searching , link : this.props.volumeInfo.previewLink})
    }

    deleteBook = () =>  {
        console.log(this.state.volumeInfo);
            API.deleteBook(this.state.volumeInfo.id)
            .then(res => this.props.update())
            .catch(err => console.log(err));
        
        
    };

    saveBook = () => {
        var info = this.state.volumeInfo;
        var book = {
            title: info.title,
            author: info.author,
            description: info.description,
            date: info.publishedDate,
            id : info.id
        }
 
        API.saveBook(book);
    }


    render() {
        return <div className="box">
            <div>Title: {this.state.volumeInfo.title}</div>
            <div> Desc: {this.state.volumeInfo.description}</div>

            <a href = {this.state.link}>View?</a>

            <div> {this.state.searching ? <div onClick={this.saveBook}> Save?</div> : <div onClick={this.deleteBook}> Delete?</div>}</div>

        </div>
    }
}