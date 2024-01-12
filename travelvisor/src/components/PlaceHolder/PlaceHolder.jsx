import React from "react"
import{Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/material/Rating';


import './styles.css'

const PlaceHolder = ({ place }) => {
    return(
       <div className="places">
       <Card elevation={5}>
         <CardMedia 
           style={{ height: 220 }}
           image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2024/01/cover-jan-fsh-534x462.jpg'}
           title={place.name}
         />
         <CardContent>
            <Typography gutterBottom variant="h5">{place.name}</Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="substitle1">Price</Typography>
              <Typography gutterBottom variant="substitle1">{place.price_level}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="substitle1">Ranking</Typography>
              <Typography gutterBottom variant="substitle1">{place.ranking}</Typography>
            </Box>
         </CardContent>
       </Card>
       </div>
    )
}

export default PlaceHolder