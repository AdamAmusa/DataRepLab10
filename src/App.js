import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter,Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/*Navbar Element from bootstrap*/}
       <Navbar bg="dark" data-bs-theme="dark"> 
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>{/* */}
          <Nav className="me-auto">
            {/*Creates link names that will redirect the user by clicking the buttons*/}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path = '/' element={<Content></Content>}></Route>{/*Home button that will redirect you to the home component */}
        <Route path ='/Create' element={<Header></Header>}></Route>{/*Button named "Create" that redirects you to the content component */}
        <Route path = '/read' element={<Footer></Footer>}></Route>{/* Button named "Read" that will redirect the user to the footer component*/}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;{/*Exports app */}
