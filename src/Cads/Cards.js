import React,{Component} from 'react'
import Card from './CardUI';
import img1 from '../assest/partners.jpg';
import img2 from '../assest/business.jpg';
import img3 from '../assest/profit.jpg';

class Cards extends Component{
    render(){
      return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img1} title="BUSINESS PARTNERS" 
                    text="if your partners aren't working as hard as you
                     it's not a partnership it's a sinking ship"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2} title="BUSINESS"
                     text="happy emplyees lead to happy customers, which leads to more profits "/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img3} title="PROFIT" 
                    text="profit is not something to add on at the end,
                    it is something to plan for in the beginning"/>
                </div>
            </div>
        </div>  
      );
}
}
export default Cards;