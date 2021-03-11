import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ShowLeagueDetails from '../ShowLeagueDetails/ShowLeagueDetails';

const LeagueDetail = () => {
    const { idLeague } = useParams();

    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.leagues))
    }, [idLeague])


    return (
        <div>
            {
                detail.map(detail => <ShowLeagueDetails detail={detail} key={detail.idLeague}></ShowLeagueDetails>)
            }
        </div>
    );
};

export default LeagueDetail;