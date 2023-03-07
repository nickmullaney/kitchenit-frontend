import { Component } from "react";
import Card from 'react-bootstrap/Card';
import './About.css'
import authorInfo from "./authors.json";
import Matt from '../img/matt.jpeg';
import Nick from '../img/nick.jpeg';
import Paula from '../img/paula.png';
import Jeremy from '../img/jeremy-adamson.jpg';


class TeamCard extends Component {

  render() {

    return (
      <div className="teamCardContainer">

        <Card className="teamCard" style={{ width: '18rem' }}>
          <Card.Title as="h2">{authorInfo[0].name}</Card.Title>
          <Card.Img src={Matt} alt='Photos of Team Members' />
          <Card.Text>{authorInfo[0].description}</Card.Text>
        </Card>

        <Card className="teamCard" style={{ width: '18rem' }}>
          <Card.Title as="h2">{authorInfo[1].name}</Card.Title>
          <Card.Img src={Nick} alt='Photos of Team Members' />
          <Card.Text>{authorInfo[1].description}</Card.Text>
        </Card>

        <Card className="teamCard" style={{ width: '18rem' }}>
          <Card.Title as="h2">{authorInfo[3].name}</Card.Title>
          <Card.Img src={Paula} alt='Photos of Team Members' />
          <Card.Text>{authorInfo[3].description}</Card.Text>
        </Card>

        <Card className= "teamCard" style={{ width: '18rem' }}>
            <Card.Title as="h2">{authorInfo[2].name}</Card.Title>
            <Card.Img src={Jeremy} alt='Photos of Team Members'/>
            <Card.Text>{authorInfo[2].description}</Card.Text>
          </Card>

      </div>
    )
  }
};

export default TeamCard;