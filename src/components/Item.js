import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Item extends React.Component{
    
    render(){
        
        return(
            <>
    
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.item.name}</Card.Title>
                    <Card.Text>
                    {this.props.item.url}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>this.props.addFav(this.props.idx)}>Add to Fav</Button>
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default Item;