import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../store/productSlice'
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
export default function Product() {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.products)
    useEffect(()=>{
        dispatch(getProduct())
    },[dispatch])
    const items= products.products
    console.log(items)
    
      const classes = useStyles();
  return (
    <Container style={{marginTop:"30px" , marginBottom:"30px"}}>
    <Grid container spacing={2}>
   {
    items.map(item=>{
        return(
            <Grid item xs={12} sm={8} md={4} key= {item.id}>
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={item.thumbnail}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.brand}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
            </Grid>
        )
    })
   }
        
   

    </Grid>
    </Container>
  )
}
