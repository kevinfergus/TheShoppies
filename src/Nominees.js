import {Card, Button} from 'react-bootstrap';
import React from 'react';
import './App.css';



const Nominees = (props) => {

const handleDelete = (nominee) => {

    props.setNominees(props.nominees.filter(movie=>movie.Title!==nominee.Title))

}
return (<div>

<Card className="Card">
    <Card.Header className="Card-Body">Your Nominees</Card.Header>
  <Card.Body>
    <Card.Text className="Card-Body Text"> 
    <table className="Card-Text">
    {props.nominees.map((movie, index) => (
    <tr>
        <div key={index} className="Card-Body"><div className="font-weight-bold"> <td>{movie.Title}</td> 
            <td> {movie.Year}</td> 
            <td><Button onClick={()=>handleDelete(movie)}>Remove</Button></td> </div>
        </div>
     </tr>
    
     
))}</table>
    </Card.Text>
  </Card.Body>
</Card>
  
</div>)
}



export default Nominees