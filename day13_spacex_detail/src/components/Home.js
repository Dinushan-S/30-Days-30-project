import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('https://api.spacexdata.com/v4/launches/latest')
                .then(result => setData(result.data))
                .catch(err => console.log(err));
        };
        fetchData();
    }, [])
    return (

        data ? (
            <div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h6 className='text-secondary'>SpaceX Latest Launch Info</h6>
                            <h2>{data.name}</h2>
                            <p>
                                SpaceX Crew-5 was the fifth operational NASA Commercial Crew
                                Program flight of a Crew Dragon spacecraft, and the eighth
                                overall crewed orbital flight. The mission was successfully
                                launched on 5 October 2022, with the aim of transporting four
                                crew members to the International Space Station (ISS). The
                                Crew Dragon spacecraft docked at the ISS on 6 October 2022 at
                                21:01 UTC.
                            </p>
                            <button className='btn btn-primary mt-2'>More info</button>
                        </div>
                        <div className='col-md-6'>
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${data.links.youtube_id}`}
                                width="100%"
                                height="400px"
                                controls={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

        ) : (
            <div></div>
        )
    )
}
