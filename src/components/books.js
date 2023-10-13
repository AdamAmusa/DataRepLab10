import Bookitems from "./bookItems";

function Books(props) {

    return props.myBook.map(
        (book) => {
            return <Bookitems myBook={book} key={book.isbn}></Bookitems>

        }
    );




}

export default Books;