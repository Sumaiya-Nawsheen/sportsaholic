import React from 'react';
import {  Col, Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const League = (props) => {
    const {idLeague, strLeague, strSport } = props.league;
    return (
        <div>
    <Col>
    
    <Card style={{ width: '25rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title><h1>{strLeague} </h1></Card.Title>
    <Card.Text>
     {strSport}
    </Card.Text>
    <Link  to= {`/details/${idLeague}`}>
    <Button  variant="primary"> Explore   <FontAwesomeIcon icon={faArrowRight}/></Button>
    </Link>
    
  </Card.Body>
</Card>

    </Col>




            
           
        </div>
    );
};

export default League;