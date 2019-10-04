import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import Card from '../Cads/Cards';
import Footer from '../components/Footer';
class About extends Component{
    render(){
        return(
            <div className="bg-secondary">
              <Navbar/>
                <div className="container">
                    <h2 className="border bg-info text-white"> <marquee>OUR MISSION</marquee></h2>
                    <br/>
                    <p> There's this notion that to grow a business, 
                    you have to be ruthless. But we know there's a better 
                    way to grow. One where what's good for the bottom line
                     is also good for customers. We believe businesses can
                      grow with a conscience, and succeed with a soul — and 
                      that they can do it with inbound. That's why we've created 
                      a platform uniting software, education, and community to help
                       businesses grow better every day.</p>     
                </div>
                <Card/>
                <br/>
                <Footer/>
            </div>
        );
    }
}
export default About;
