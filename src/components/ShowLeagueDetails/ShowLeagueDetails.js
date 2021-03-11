import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faFlag, faMars, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitterSquare, faYoutube, faChrome } from '@fortawesome/free-brands-svg-icons'
import male from '../../images/male.png';
import female from '../../images/female.png';


const ShowLeagueDetails = (props) => {
    const { strLeague, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strLogo } = props.detail;

    const detailSummaryStyle = {
        boxShadow: '10px 10px 8px rgb(0, 26, 51)',
        borderRadius: '25px',
        backgroundColor: 'rgb(153, 204, 255)',
        width: "100%",
        marginTop: '30px',
        marginBottom: '30px',
        lineHeight: "5px"
    }

    const iconStyle = {
        width: '50px',
        height: '75px',
        margin: '5px'
    }

    const icon = {
        founded: <FontAwesomeIcon icon={faHourglassHalf} />,
        country: <FontAwesomeIcon icon={faFlag} />,
        sport: <FontAwesomeIcon icon={faFutbol} />,
        gender: <FontAwesomeIcon icon={faMars} />,
        facebook: <FontAwesomeIcon icon={faFacebook} size='3x' />,
        twitter: <FontAwesomeIcon icon={faTwitterSquare} size='3x' />,
        youtube: <FontAwesomeIcon icon={faYoutube} size='3x' />,
        website: <FontAwesomeIcon icon={faChrome} size='3x' />
    }


    const gender = (strGender && strGender === 'Male') ? <img src={male} width="75%" alt='' /> : <img src={female} width="75%" alt='' />

    const description = (strDescriptionEN === ('') ?
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae laboriosam libero dolorem fugit soluta, consequuntur consequatur tempora itaque iste nulla facere, nesciunt reiciendis officia quo veritatis cumque, quasi qui ad voluptatibus mollitia. Molestiae tempora eum minima dolores doloremque cum laudantium cupiditate voluptate repellat, est iusto fugit architecto nulla suscipit? Pariatur ipsam vero delectus exercitationem eos perspiciatis magni incidunt eum nulla ad minima, repellendus dolore architecto tenetur facilis est! Inventore dolor delectus dolorum praesentium tempora quod aperiam perspiciatis iure quisquam, atque ut molestiae ea cupiditate blanditiis veritatis ipsam rerum impedit dolores ullam debitis laboriosam reprehenderit a? Accusantium quisquam eius at?
</p> :
        <p>{strDescriptionEN}</p>)


    return (
        <div>

            <div >
                <Jumbotron fluid style={{ marginBottom: '0px' }}>
                    <Container>
                        <div style={{ alignItems: 'center', width: '50%', }}>
                            <img src={strLogo} style={{ width: '100%' }} alt='' />
                        </div>
                    </Container>
                </Jumbotron>
            </div>


            <div style={{ backgroundImage: 'linear-gradient(to bottom right,rgb(0, 170, 255), rgb(102, 204, 153),rgb(0, 89, 179))' }}>
                <Container fluid>
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }} sm={{ span: 1, offset: 3 }} >
                            <div style={{ alignItems: 'center' }}>
                                <div style={detailSummaryStyle} >
                                    <Container >
                                        <Row sm={1} lg={2}>
                                            <Col lg={6} sm={3}>
                                                <div>
                                                    <h2><strong> {strLeague} </strong></h2><br />
                                                    <p> {icon.founded}  Founded: {intFormedYear}</p><br />
                                                    <p>{icon.country}  Country: {strCountry} </p><br />
                                                    <p>{icon.sport}  Sport Type: {strSport}</p><br />
                                                    <p> {icon.gender} Gender: {strGender} </p>
                                                </div>
                                            </Col>

                                            <Col lg={6} sm={3}>
                                                <p> {gender}</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>

                                <div>
                                    {description}
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>


                <div style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <p style={iconStyle}><a href='https://www.google.com/' target="_blank">{icon.website}</a></p>
                    <p style={iconStyle}><a href='https://www.facebook.com/' target="_blank">{icon.facebook}</a></p>
                    <p style={iconStyle}><a href='https://twitter.com/' target="_blank"> {icon.twitter}</a> </p>
                    <p style={iconStyle}><a href='https://www.youtube.com/' target="_blank"> {icon.youtube}</a> </p>
                </div>
            </div>
        </div>
    );
};

export default ShowLeagueDetails;