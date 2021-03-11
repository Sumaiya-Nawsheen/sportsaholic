import React, { useEffect, useState } from 'react';
import League from '../League/League';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues.slice(0, 21)))
    }, [])


    return (
        <div style={{ width: '100%', margin: '0px' }}>
            <div >
                <Jumbotron fluid style={{ marginBottom: '0px' }}>
                    <Container>
                        <h1> Sportsaholic</h1>
                    </Container>
                </Jumbotron>
            </div>


            <div style={{ backgroundImage: 'linear-gradient(to bottom right,rgb(204, 153, 255), rgb(51, 204, 255), rgb(0, 0, 204))' }}>
                <Container style={{ width: "75%" }}>
                    <Row sm={1} md={2} lg={3} >
                        {
                            leagues.map(league => <League league={league} key={league.idLeague}></League>)
                        }
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default Home;