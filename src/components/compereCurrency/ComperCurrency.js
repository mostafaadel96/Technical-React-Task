import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
export default function ComperCurrency({Days,usd,eur,cad}) {

  
  return (
    <Container>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={8} md={2}>
          <Paper style={{ padding:"1px" }}>Date<br />
          {
            Days.map((itme)=>{
              return(
                <ul>
                <li>{itme}</li>
                </ul>
              )
            })
          }
          <br/></Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={2}>
          <Paper style={{ padding:"5px"}}>USD <br />
          {
            usd.map((itme)=>{
              return(
                <ul>
                <li>{itme}</li>
                </ul>
              )
            })
          }
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={2}>
          <Paper style={{ padding:"5px" }}>EUR<br />
          {
            eur.map((itme)=>{
              return(
                <ul>
                <li>{itme}</li>
                </ul>
              )
            })
          }
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={2}>
          <Paper style={{ padding:"5px" }}>CAD<br />
          {
            cad.map((itme)=>{
              return(
                <ul>
                <li>{itme}</li>
                </ul>
              )
            })
          }
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={2}>
          <Paper style={{ height: "100vh" }}>Indicator For EUR<br />
          
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={2}>
          <Paper style={{ height: "100vh" }}>Indicator For CAD</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
