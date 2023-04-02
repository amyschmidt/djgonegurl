import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'

const Mixes = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: '25px' }}>
      <Grid container spacing={{ xs: 8, sm: 8, md: 8 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
             <Card sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Mac Miller
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="/static/images/mixes/king-tai-3-24-23.jpg"
                  alt="Live from space album cover"
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Mixes;