import { useState } from "react";

function Create() {


    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');

    const handleSubmit = (e) => { 
        e.preventDefault();//stops the function from being called multiple times in one event

        //when the form is submitted the contents written are logged onto the console
        console.log("Title: " + title+
                    " Cover: " +cover+
                    " Author: " + author);
    }

    return (
        <div>
            <h1>Hello from the create Component!</h1>
            <form onSubmit={handleSubmit}>
                {/*Allows the user to input values from the webpage into the variables */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}//variable is assigned as a property
                        onChange={(e) => { setTitle(e.target.value) }}//when the value of e changes the contents change which allows the user to update the contents of the variable
                    />
                </div>
                <div className="form-group">
                    <label>Add Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover} //variable is assigned as a property
                        onChange={(e) => { setCover(e.target.value) }}//when the value of e changes the contents change which allows the user to update the contents of the variable
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author} //variable is assigned as a property
                        onChange={(e) => { setAuthor(e.target.value) }}//when the value of e changes the contents change which allows the user to update the contents of the variable
                    />
                </div>
                <div>
                    <input type="submit" value="Add Book"></input>
                </div>
            </form>
        </div>


    );

}

export default Create;