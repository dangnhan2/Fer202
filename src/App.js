// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import Carousel from "react-bootstrap/Carousel";
function App() {
  return (
    <>
      <Container className="bg-dark" fluid>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col>
                  <Navbar expand="lg" className="bg-dark navbar-dark">
                    <Container>
                      <Navbar.Brand href="#">Pizza House</Navbar.Brand>
                      <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                        <Nav
                          className="me-auto my-2 my-lg-0"
                          style={{ maxHeight: "100px" }}
                          navbarScroll
                        >
                          <Nav.Link href="#action1">Home</Nav.Link>
                          <Nav.Link href="#action2">About Us</Nav.Link>
                          <Nav.Link href="#action3">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                          <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                          />
                          <Button variant="outline-success">Search</Button>
                        </Form>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/image/pizza1.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/image/pizza2.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/image/pizza3.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Container className="text-white">
              <Row>
                <Col>
                  <h2>Our Menu</h2>
                  <Row>
                    <Col>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src="image/menu4.jpg" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Buy</Button>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src="/image/menu1.jpg" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Buy</Button>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src="/image/menu2.jpg" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Buy</Button>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src="/image/menu3.jpg" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Buy</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <h2 className="text-center text-white">
                        Book Your Table
                      </h2>
                    </Col>

                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3">
                          <Form.Control type="text" placeholder="Your Name" />

                          <Form.Control type="email" placeholder="Your Email" />

                          <Form.Select aria-label="Default select example">
                            <option>Select a service</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Please write your comment"
                        />
                      </Form.Group>
                      <Button type="submit" variant="warning">
                        Send Message
                      </Button>
                    </Form>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
