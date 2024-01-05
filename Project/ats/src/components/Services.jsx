import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';
import './Services.css';
import CyberSecurityPage from './CyberSecurityPage';

export const Services = ({image, name, content}) => {
  return (
    <>
    <div className='cont'>
    <div className='ca'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Card image"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/cybersecurity">
                <Button size="small">View Job</Button>
              </Link>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </div>
    </>
  );
}

export default Services;
