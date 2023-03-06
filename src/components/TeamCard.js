import { Component, Col} from "react";
import Card from 'react-bootstrap/Card';

class TeamCard extends Component {

    render() {
   
      return(
        <>
        
          <Card className= "teamCard" style={{ width: '18rem' }}>
            <Card.Title as="h2">{this.props.name}</Card.Title>
            <Card.Img src={this.props.img_Url} alt='Photos of Team Members'/>
            <Card.Text>{this.props.description}</Card.Text>
          </Card>
          
          </>
          
         
       
      )
    }
  };
  
  export default TeamCard;