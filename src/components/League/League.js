import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const League = (props) => {
    const { idLeague, strLeague, strSport } = props.league;
    return (

        <div style={{ marginTop: "20px" }}>
            <Col style={{ width: '20rem', height: '300px', margin: "10px", paddingRight: '0px' }}>
                <Card style={{ width: '15rem', height: '300px', borderRadius: '40px', backgroundColor: 'rgb(255, 217, 179)' }}>

                    <Card.Body style={{ height: '200px' }}>
                        <Card.Title><h1>{strLeague} </h1></Card.Title>
                        <Card.Text>
                            {strSport}
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer>
                        <Link to={`/details/${idLeague}`}>
                            <Button variant="info"> Explore  <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default League;