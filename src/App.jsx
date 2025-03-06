import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button, Card, Dropdown } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar text="white" bg="transparent" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Mi Portafolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Dropdown>
                <Dropdown.Toggle className='btn btn-outline-light rounded-pill' variant="transparent" id="dropdown-basic">
                  Contacto
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="tel:+34 679 657 912">📞 +34 679 657 912</Dropdown.Item>
                  <Dropdown.Item href="mailto:agusrabadan85@gmail.com">📧 agusrabadan85@gmail.com</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
              <Nav.Link href="#projects">Proyectos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="text-white p-5 mt-5 d-flex align-items-center justify-content-center ">
        <div className="text-center">
          <h1>Agustín Rabadán </h1>
          <p className="lead p-5">Desarrollador Full Stack | React | Python | Bootstrap |</p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a href="https://www.linkedin.com/in/agust%C3%ADn-rabad%C3%A1n-mart%C3%ADnez-a1a8411b5/" target="_blank" rel="noopener noreferrer">
              <img
                className='rounded-pill'
                src='https://www.asoaga.com/wp-content/uploads/2019/02/icono-linkedin.png'
                width="60" 
                height="60" 
                alt="LinkedIn"
              />
            </a>
            <a href="https://github.com/agusrabadan" target="_blank" rel="noopener noreferrer">
              <img 
              className='rounded-pill'
                src='https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU' 
                width="60" height="60" alt="GitHub"
              />
            </a>
            <a href="https://app.enhancv.com/share/583cb343/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" target="_blank" rel="noopener noreferrer">
              <img 
                src='https://t4.ftcdn.net/jpg/01/39/64/23/360_F_139642321_ptZco8pbwESSjMnsxjx6KXg4DkoCmHES.jpg' 
                className='rounded-pill'
                width="60" 
                height="60" 
                alt="CV"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Acerca de mí */}
      <Container id="about" className="py-5 text-center text-white">
        <h2>Acerca de mí</h2>
        <p>Soy un apasionado del desarrollo web con experiencia en tecnologías modernas.</p>
      </Container>

      {/* Proyectos */}
      {/* <Container id="projects" className="py-5">
        <h2 className="text-center text-white">Proyectos</h2>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Proyecto 1</Card.Title>
              <Card.Text>Descripción breve del proyecto.</Card.Text>
              <Button variant="primary" href="#">Ver más</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Proyecto 2</Card.Title>
              <Card.Text>Descripción breve del proyecto.</Card.Text>
              <Button variant="primary" href="#">Ver más</Button>
            </Card.Body>
          </Card>
        </div>
      </Container> */}
    </>
  );
}

export default App;
