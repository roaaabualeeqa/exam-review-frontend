import React from 'react';
import axios from 'axios';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Home extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            allData: []
        }
    }
    componentDidMount = async ()=>{
        // const server = 'http://localhost:3001';
        const server = `https://pockiapp-301d22.herokuapp.com`;
        const allData = await axios.get(`${server}/all`);
        // console.log(allData.data);
        this.setState({
            allData : allData.data
        })
        
    }

    addFav= async (idx)=>{
        // const server = 'http://localhost:3001';
        const server = `https://pockiapp-301d22.herokuapp.com`;
        const obj = {
            name: this.state.allData[idx].name,
            url: this.state.allData[idx].url
        }
        await axios.post(`${server}/addToFav`,obj);
    }
    
    render(){
        return(
            <>
            <Row xs={1} md={3} className="g-4">
            {this.state.allData.map((item,idx)=>(
               <Col>
               <Item
               key={idx}
               item={item}
               addFav={this.addFav}
               idx={idx}
               /> 
               </Col>
            ))
            }
            </Row>
            </>
            
        )
    }
}

export default Home;