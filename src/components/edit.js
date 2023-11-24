import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";





export default function Edit(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array objects push() method
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const [author, setAuthor] = useState("");
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/book/' + id)
            .then((response) => {
                // Assign Response data to the arrays using useState.
                setTitle(response.data.title);
                setCover(response.data.cover);
                setAuthor(response.data.author);
            })
            .catch(function (error) {//catches errors
                console.log(error);
            })
    }, []);
    const handleSubmit = (event) => {//function saves the data being submitted
        event.preventDefault();
        const newBook = {//data is organised for json format
            id: id,
            title: title,
            cover: cover,
            author: author
        };
        axios.put('http://localhost:4000/api/book/' + id, newBook)//sends to http which has a get method
            .then((res) => {
                console.log(res.data);
                navigate('/read');
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>{/*When the form is submitted the function is called to handle the data */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}//variable is assigned as a property
                        onChange={(e) => setTitle(e.target.value)}//when the value of e changes the contents change which allows the user to update the contents of the variable
                    />
                </div>
                <div className="form-group">
                    <label>Add Release Year: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}//variable is assigned as a property
                        onChange={(e) => setCover(e.target.value)}//when the value of e changes the contents change which allows the user to update the contents of the variable
                    />
                </div>
                <div className="form-group">
                    <label>Add Poster Url: </label>
                    <input type="text"
                        className="form-control"
                        value={author}//variable is assigned as a property
                        onChange={(e) => setAuthor(e.target.value)}//when the value of e changes the contents change which allows the user to update the contents of the variable
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Book" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}



