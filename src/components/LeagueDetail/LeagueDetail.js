import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol,faFlag,  faMars, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap';

const LeagueDetail = () => {
    const {idLeague} = useParams();

    const [detail, setDetail] =useState([]);
    useEffect( () => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then (res => res.json())
        .then (data => setDetail(data.leagues))
    },[idLeague])
     
    const detailSummaryStyle = {
        border: '5px solid lightgrey',
        borderRadius: '5px',
        backgroundColor: 'lightblue'
    }

    const icon = {
        founded: <FontAwesomeIcon icon={faHourglassHalf}/>,
        country: <FontAwesomeIcon icon={faFlag}/> ,
        sport: <FontAwesomeIcon icon={faFutbol}/>,
        gender: <FontAwesomeIcon icon={faMars}/>,
    }
    return (
        <div>

<Container>
  <Row>
    <Col>
    {
  detail.map(detail => {
      return ( <div style={detailSummaryStyle}> 
        <h2><strong> {detail.strLeague} </strong></h2>
        <p> {icon.founded}  Founded: {detail.intFormedYear}</p>
        <p>{icon.country}  Country: {detail.strCountry} </p>
        <p>{icon.sport}  Sport Type: {detail.strSport}</p>
         <p> {icon.gender} Gender: {detail.strGender} </p>
    </div>)
   

  })  
}
    </Col>

<Col>2 of 2</Col>
  </Row>
</Container>

<div>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae laboriosam libero dolorem fugit soluta, consequuntur consequatur tempora itaque iste nulla facere, nesciunt reiciendis officia quo veritatis cumque, quasi qui ad voluptatibus mollitia. Molestiae tempora eum minima dolores doloremque cum laudantium cupiditate voluptate repellat, est iusto fugit architecto nulla suscipit? Pariatur ipsam vero delectus exercitationem eos perspiciatis magni incidunt eum nulla ad minima, repellendus dolore architecto tenetur facilis est! Inventore dolor delectus dolorum praesentium tempora quod aperiam perspiciatis iure quisquam, atque ut molestiae ea cupiditate blanditiis veritatis ipsam rerum impedit dolores ullam debitis laboriosam reprehenderit a? Accusantium quisquam eius at?
</p>
 </div>

 <div>

 </div>
   
       {
           detail.map(detail => <p>{detail.strDescriptionEN}</p>)
       }
        
   </div> );
};

export default LeagueDetail;