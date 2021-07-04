import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpdateForm from './UpdateForm';

class Favorite extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favArray: [],
            show: false,
            index:-1,
            name:'',
            url:''
        }
    }
    componentDidMount = async ()=>{
        // const server = 'http://localhost:3001';
        const server = `https://pockiapp-301d22.herokuapp.com`;
        const favData = await axios.get(`${server}/getFav`);
        console.log(favData.data);
        this.setState({
            favArray: favData.data
        })

    }

    delete = async (id)=>{
        // console.log(id);
        // const server = 'http://localhost:3001';
        const server = `https://pockiapp-301d22.herokuapp.com`;
        const newArr = await axios.delete(`${server}/deletFav?id=${id}`);
        // console.log(newArr.data);
        this.setState({
            favArray: newArr.data
        })
    }

    showUpdateForm = (idx)=>{
        this.setState({
            show:true,
            index:idx,
            name:this.state.favArray[idx].name,
            url:this.state.favArray[idx].url
        })
    }

    handleClose = ()=>{
        this.setState({
            show:false
        })
    }

    updateData = async(e)=>{
        e.preventDefault();
        const obj = {
            name:e.target.name.value,
            url:e.target.url.value,
            id:this.state.favArray[this.state.index]['_id']
        }
        // const server = 'http://localhost:3001';
        const server = `https://pockiapp-301d22.herokuapp.com`;
        const newData = await axios.put(`${server}/updateFav`,obj);
        this.setState({
            favArray:newData.data,
            show:false
        })
    }
    
    render(){
        return(
            <>
            <Row xs={1} md={3} className="g-4">
            {
                
                this.state.favArray.map((item,idx)=>(
                   <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                {item.url}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>this.showUpdateForm(idx)}>Update</Button>
                                <Button variant="primary" onClick={()=>this.delete(item._id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
            </Row>

            
            <UpdateForm
            show={this.state.show}
            handleClose={this.handleClose}
            name={this.state.name}
            url={this.state.url}
            updateData={this.updateData}
            />
            </>
        )
    }
}

export default Favorite;