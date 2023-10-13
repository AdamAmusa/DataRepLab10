import {Card} from "react-bootstrap";

function Bookitems(props) {

    return (


        <div>
            {/*Card container */}
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header> {/*Prints title of books */}
                <Card.Body>
                <blockquote className = "blockquote mb-0">   
                    <img src={props.myBook.thumbnailUrl}></img>{/*Prints out photo of books */}
                    <footer>
                    <Card.Text>{props.myBook.authors[0]}</Card.Text>{/*Prints out authors of books */}
                    </footer>
                    </blockquote> 
                </Card.Body>
            </Card>

        </div>
    );


}
export default Bookitems;