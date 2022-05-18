import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import "../styles/podcast.css"

class Podcast extends React.Component {
    /*constructor(props) {
        super(props);
    }*/

    render() { 
        return (<div>
            <NavBar />
            <div className='podcast'>
            <img id="var" alt="var" src={process.env.PUBLIC_URL+"/icons/podcastvar.png"}/>
            </div>
            <Footer />
        </div>);
    }
}
 
export default Podcast;