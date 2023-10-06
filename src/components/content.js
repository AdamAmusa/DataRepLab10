{/*Function of the component with contents*/ }
function Content() {
    return (
        <div className="App">
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

}
{/*Exports component data to the App file */ }
export default Content;