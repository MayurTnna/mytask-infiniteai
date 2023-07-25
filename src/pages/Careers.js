import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { jobData } from "../assets/dummydata";
import "../assets/scss/Careers.scss"
const Careers = () => {
  return (
    <>
      <div className="career-main">
        <div className="row container">
          {" "}
          {jobData &&
            jobData.map((item) => (
                <div className="col-lg-4 col-md-6 col-sm-12">  <div className="career-main">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>

                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="dark">Dark</Button>
                  </Card.Body>
                </Card>
              </div> </div>
            
            ))}{" "}
        </div>
      </div>
    </>
  );
};

export default Careers;
