import Books from "./books";
import { useEffect, useState } from "react";
import axios from "axios";


function Read() {
    /*Passing a variable and method to update variable */
    const [data, setData] = useState([]);


    //asyncrinous method that makes a http request
    useEffect(
        () => {
            axios.get('http://localhost:4000/api/books')/*Generates a Http request to the url and collects data */
                //when we receive response pull the data into the setData method
                .then(
                    (response) => {//response function that sets the http data into the data constant variable using the setData function
                        setData(response.data)
                    }
                )
                //when there is no response catch the error
                .catch(
                    (error) => {//function that prints out the error when the error is caught
                        console.log(error);
                    }
                );
        }, []
    );
    //reloads data after changes have been made
    const Reload = (e) => {
        axios.get('http://localhost:4000/api/books')/*Generates a Http request to the url and collects data */
            //when we receive response pull the data into the setData method
            .then(
                (response) => {//response function that sets the http data into the data constant variable using the setData function
                    setData(response.data)
                }
            )
            //when there is no response catch the error
            .catch(
                (error) => {//function that prints out the error when the error is caught
                    console.log(error);
                }
            )
    }
    return (
        <div>
            <h1>Read Component</h1>

            <Books myBook={data} ReloadData = {Reload}></Books>{/*Passes the Json data from this component to the myBook component */}

        </div>
    );

}

export default Read; //allows for the page to be imported to other components