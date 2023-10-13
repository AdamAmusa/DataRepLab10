import {Card} from "react-bootstrap";

function Bookitems(props) {

    return (


        <div>

            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                <blockquote className = "blockquote mb-0">   
                    <img src={props.myBook.thumbnailUrl}></img>
                    <footer>
                    <Card.Text>{props.myBook.authors[0]}</Card.Text>
                    </footer>
                    </blockquote> 
                </Card.Body>
            </Card>

        </div>
    );


}
export default Bookitems;