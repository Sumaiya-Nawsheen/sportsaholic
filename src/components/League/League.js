import React from 'react';
import {  Col, Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const League = (props) => {
    const {strLeague, strSport } = props.league;
   
    return (
        <div>
    <Col>
    
    <Card style={{ width: '25rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title><h1>{strLeague} </h1></Card.Title>
    <Card.Text>
    <h3> {strSport}</h3>
    </Card.Text>
    <Button variant="primary"> Explore   <FontAwesomeIcon icon={faArrowRight}/></Button>
  </Card.Body>
</Card>

    </Col>




            
           
        </div>
    );
};

export default League;