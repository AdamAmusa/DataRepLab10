import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Bookitems(props) {

    return (


        <div>
            {/*Card container */}
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header> {/*Prints title of books */}
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.cover}></img>{/*Prints out photo of books */}
                        <footer>
                            {props.myBook.author}{/*Prints out authors of books */}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={'/edit/' + props.myBook._id} className="btn btn-primary">Edit</Link> {/*Button that directs the page to another page to edit books*/}
                <Button variant = "danger" onClick={(e)=>{//when button is clicked the function is called
                    axios.delete('http://localhost:4000/api/book/'+props.myBook._id)//delete book with this ID
                    .then((res)=>{
                        let reload = props.Reload();
                    })
                    .catch();
                }}>Delete</Button>
            </Card>

        </div>
    );


}
export default Bookitems;