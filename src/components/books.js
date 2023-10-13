import Bookitems from "./bookItems";

function Books(props) {

    //splits the array of books into individual books
    return props.myBook.map(
        (book) => {
            return <Bookitems myBook={book} key={book.isbn}></Bookitems> //passes data to book item component

        }
    );




}

export default Books;