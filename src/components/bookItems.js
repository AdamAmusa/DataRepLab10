import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                <Link to={'/edit/' + props.myBook._id} className="btn btn-primary">Edit</Link> {/**/}
            </Card>

        </div>
    );


}
export default Bookitems;