import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Education.css";

function Education() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Container>
        <span className="education">My Educational Odyssey</span>
        <span className=" skillEducation">
          Embarking on my educational odyssey, I've embraced learning as a
          lifelong pursuit. Each academic milestone reflects not just knowledge
          gained, but a dedication to personal and professional growth, shaping
          my journey with purpose and passion.
        </span>
        <Row md={3}>
          <Col xs={12} className="my-2">
            <Card>
              <Card.Body>
                <Card.Title>School: Saraswati S.S</Card.Title>
                <Card.Text>
                  During my school days, I was an active and bright student,
                  taking on various roles such as house captain, program host,
                  and engaging in numerous extracurricular activities.
                  Recognized by every teacher, I strived to contribute my best,
                  demonstrating leadership and enthusiasm throughout my academic
                  journey.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} className="my-2">
            <Card>
              <Card.Body>
                <Card.Title>High School: Motherland S.S</Card.Title>
                <Card.Text>
                  A proud Motherland HSS graduate, I seamlessly integrated
                  academic excellence with social activism as a dedicated member
                  of Soch Samuha Motherland. Serving as a program host, I
                  actively participated in impactful initiatives, balancing
                  active involvement in and out of the classroom. Graduating
                  with commendable grades, I am a well-rounded individual
                  committed to making a positive societal impact.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} className="my-2">
            <Card>
              <Card.Body>
                <Card.Title>Bachelor's Degree</Card.Title>
                <Card.Text>
                  I am a Computer Science and Information Technology student
                  pursuing my bachelor's degree at the prestigious Tribhuvan
                  University in Nepal. Engaging in a dynamic academic journey, I
                  am immersed in the world of technology, acquiring valuable
                  skills and knowledge to thrive in the ever-evolving field of
                  IT.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Education;
