import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Card from '../Cads/Cards';
class Home extends Component{
    render(){
        return(
            <div className="bg-secondary">
              <Navbar/>

               <div className="container ">
                   <h2 className="border bg-info text-white"><marquee>Welcome To Home </marquee> </h2>
                    <p>A product line is a group of related products all marketed under a single brand name that is sold by the same company. Companies sell multiple product lines under their various brand names, seeking to distinguish them from each other for better usability for consumers. <br/>
                    <p>Companies often expand their offerings by adding to existing product lines because consumers are more likely to purchase products from brands with which they are already familiar.</p>
                  <br/>
                  <h6 className="text-white ">SERVICES</h6>
                     Our company is the best seller of products.These product is not only beneficial but also it is of low cost.Poor people can easy buy it.Hope you Like it.</p>
               </div>
               <Card/>
               <br/>
               <Footer/>
            </div>
        );
    }
}
export default Home;
