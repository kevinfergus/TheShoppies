import {Card, Button} from 'react-bootstrap';
import React from 'react';
import './App.css';



const Nominees = (props) => {

const handleDelete = (nominee) => {

    props.setNominees(props.nominees.filter(movie=>movie.Title!==nominee.Title))

}

const handleSubmit = () => {
    props.setMovieList([])
    props.setSubmitted(true)
}

if(!props.submitted){
return (<div>

<Card className="Card">
    <Card.Header className="Card-Body">Your Nominees</Card.Header>
  <Card.Body>
    <Card.Text className="Card-Body Text"> 
    <div>
   <table className="Card-Text">
    {props.nominees.map((movie, index) => (
    <tr>
        <div key={index} className="Card-Body"><div className="font-weight-bold"> <td>{movie.Title}</td> 
            <td> {movie.Year}</td> 
            <td><Button onClick={()=>handleDelete(movie)} size="sm">Remove</Button></td> </div>
        </div>
     </tr>
    
     
))}</table>
    <Button size="sm" onClick={()=>handleSubmit()}>Submit</Button></div>
  
    </Card.Text>
  </Card.Body>
</Card>
  
</div>)
}
else {
    return <div>Nice! You just voted in The Shoppies</div>
}
}



export default Nominees