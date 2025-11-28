import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import blogImage from "./images/blog_html-min.jpg";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
            <p>Hello World</p>
            <img
                src={blogImage}
                alt="HTML and CSS"
                style={{ width: "300px", marginTop: "20px" }}
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <p>Priyanka Chaudhuri</p>
            <h2>Tools We Require</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React and Typescript</li>
            </ul>
            <Button
                variant="primary"
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container style={{ marginTop: "2rem" }}>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
