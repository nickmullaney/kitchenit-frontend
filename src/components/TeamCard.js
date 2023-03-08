import { Component } from "react";
import Card from 'react-bootstrap/Card';
import './About.css'
import authorInfo from "./authors.json";
import Matt from '../img/matt.jpeg';
import Nick from '../img/nick.jpeg';
import Paula from '../img/paula.png';
import Jeremy from '../img/jeremy-adamson.jpg';
import { AnimatePresence, motion as m } from "framer-motion";



class TeamCard extends Component {

  render() {

    return (
      <AnimatePresence>
        <m.div className="teamCardContainer"
      
        >
          <m.Card
            className="teamCard"
            style={{ width: '20rem' }}
            initial={{ x: -10000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            >
            <Card.Title as="h2">{authorInfo[0].name}</Card.Title>
            <Card.Img src={Matt} alt='Photos of Team Members' />
            <Card.Text>{authorInfo[0].description}</Card.Text>
          </m.Card>

          <m.Card className="teamCard" style={{ width: '20rem' }}
            initial={{ x: -10000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.75 }}>
            <Card.Title as="h2">{authorInfo[1].name}</Card.Title>
            <Card.Img src={Nick} alt='Photos of Team Members' />
            <Card.Text>{authorInfo[1].description}</Card.Text>
          </m.Card>

          <m.Card className="teamCard" style={{ width: '20rem' }}
            initial={{ x: -10000 }}
            animate={{ x: 0 }}
            transition={{ duration: 2.5 }}>
            <Card.Title as="h2">{authorInfo[3].name}</Card.Title>
            <Card.Img src={Paula} alt='Photos of Team Members' />
            <Card.Text>{authorInfo[3].description}</Card.Text>
          </m.Card>

          <m.Card className="teamCard" style={{ width: '20rem' }}
            initial={{ x: -10000 }}
            animate={{ x: 0 }}
            transition={{ duration: 3.5 }}>
            <Card.Title as="h2">{authorInfo[2].name}</Card.Title>
            <Card.Img src={Jeremy} alt='Photos of Team Members' />
            <Card.Text>{authorInfo[2].description}</Card.Text>
          </m.Card>
        </m.div>
      </AnimatePresence>
    )
  }
};

export default TeamCard;