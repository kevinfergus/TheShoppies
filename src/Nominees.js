import {Card, Button} from 'react-bootstrap';
import React from 'react';


const Nominees = (props) => {

const handleDelete = (nominee) => {

    props.setNominees(props.nominees.filter(movie=>movie.Title!==nominee.Title))

}
return (<div>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Nominees</Card.Title>
    <Card.Text>
    {props.nominees.map((movie, index) => (
    <div key={index}><div className="font-weight-bold">{movie.Title}</div>
    {movie.Year} <Button onClick={()=>handleDelete(movie)}>Remove</Button></div>
))}
    </Card.Text>
  </Card.Body>
</Card>
  
</div>)
}



export default Nominees