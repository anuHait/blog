import React from 'react'
import Banner from './banner';
import Header from './header';
import Categories from './categories';
import { Grid } from '@mui/material';
function Home() {
  return (
    <div>
    <Header/>
    <Banner/>
    <Grid container>
    <Grid item lg={2} sm={2} xs={12}>
    <Categories/>
    </Grid>
    <Grid container item xs={12} sm={10} lg={10}>
    
    </Grid>
    </Grid>
    
    </div>
  )
}

export default Home
