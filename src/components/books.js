import Bookitems from "./bookItems";


function Books(props) {

    //splits the array of books into individual books
    return props.myBook.map(
        (book) => {
                                                            //reloads data when changes are made
            return <Bookitems myBook={book} key={book._id} Reload={()=>{props.ReloadData()}}></Bookitems> //passes data to book item component

        }
    );




}

export default Books;