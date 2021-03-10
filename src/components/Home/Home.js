import React, { useEffect, useState }  from 'react';
import League from '../League/League';
import { Container, Row} from 'react-bootstrap';


const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then (res => res.json())
        .then (data => setLeagues(data.leagues))
    } ,[])
    





    
    return (
        <div>
<Container>
  <Row sm={1} md={2} lg={3} className="m-10">
     {
         leagues.map( league => <League league={league}></League> )
     }
       
  </Row>
</Container>
        </div>
    );
};

export default Home;