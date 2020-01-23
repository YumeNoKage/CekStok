import React from 'react';
import './video.css';

class Video extends React.Component{
    render(){
        return (
            <>
                <div className="videoItem">
                    <div className="video-all container">     
                        <div className="descrip">
                            <h1>Lorem Ipsum</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem commodi unde neque aliquid soluta, nam aut autem quas illum facilis debitis quae, omnis ea? Illo quis praesentium doloremque delectus porro obcaecati natus, dolores minus voluptatem at nemo blanditiis adipisci ad! Modi nam dolorem omnis, eaque corporis temporibus quo culpa itaque.</p>
                            <div className="btn-banner">
                                <button type="submit">Lorem Ipsum</button>
                            </div>
                        </div>
                        <div className="video"> 
                            <video width="613" height="350" controls>
                                <source src="" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Video;