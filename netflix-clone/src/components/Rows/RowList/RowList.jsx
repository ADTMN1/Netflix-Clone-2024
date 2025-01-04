import React from 'react';
import Row from '../Row/Row';
import requests from '../../../Utils/requests';
const RowList = () => {
    return (
        <div>

            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated"
                fetchUrl={requests.fetchTopRatedMovies}
            />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default RowList;
