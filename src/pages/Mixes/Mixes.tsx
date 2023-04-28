import * as React from 'react';
import { Card } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'
// import IconButton from '@mui/material/IconButton';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useTheme } from '@mui/material/styles';

// const mixData = [
  // {
  //   title: "King Tai 4.28.23",
  //   image: "/static/images/fliers/king-tai-3-24-23.jpg",
  //   mix: "/static/images/mixes/5-21-22.mp3"
  // },
  // {
  //   title: "King Tai 3.24.23",
  //   image: "/static/images/mixes/king-tai-3-24-23.jpg",
  //   mix: "",
  // },
  // {
  //   title: "King Tai 2.24.23",
  //   image: "/static/images/mixes/king-tai-2-24-23.jpg",
  // },
  // {
  //   title: "King Tai 9.23.22",
  //   image: "/static/images/mixes/king-tai-9-23-22.jpg",
  // },
  // {
  //   title: "King Tai 08.06.22",
  //   image: "/static/images/mixes/king-tai-8-6-22.jpg",
  // },
// ]
const mixCloud = [
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fking-tai-86%2F"
  },
    {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fking-tai-july-22-2022%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fsallys-bk-7162022%2F"
  }, 
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fking-tai-521%2F"
  },  
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Flets-talk-about-sex%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fwomens-spring-pop-up-market%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fodolly-radio-september-2020%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fodolly-radio-july-2020%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fgemini%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fsocial-distance-makes-the-heart-grow-fonder%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fin-poor-taste-ace-hotel-ny%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fhottie-music-vol-03%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fhottie-music-vol-02%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fhottie-music-vol-01%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fking-tai-14th-june-2019-1%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fking-tai-7th-june-2019-3%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fking-tai-06-07-2019%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fodolly-dearest-launch-party-part-4%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fodolly-dearest-launch-party-part-3%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fodolly-dearest-launch-party-part-2%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fodolly-dearest-launch-party-part-1%2F"
  }
]

const Mixes = () => {
  // const theme = useTheme();

  return (
    <>
      {/* <Grid sx={{ flexGrow: 1, margin: '25px' }} container direction="row" spacing={{ xs: 8, sm: 8, md: 8 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {mixData.map((mix, index) => (
          <Grid container justifyContent="center" alignItems="center"  xs={2} sm={4} md={4} key={index}>
             <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                sx={{ width: 300 }}
                image={mix.image}
                src={mix.mix}
                alt={`${mix.title} graphic`}
              />
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {mix.title}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <IconButton aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                  </IconButton>
              </Box>
              <CardMedia
                component="audio"
                sx={{ width: 300 }}
                src={mix.mix}
              />
            </Card>
          </Grid>
        ))}
        </Grid> */}
        {/* <Divider variant="middle" /> */}
        <Grid sx={{ flexGrow: 1, margin: '25px' }} container direction="row" spacing={{ xs: 8, sm: 8, md: 8 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {mixCloud.map((mix, index) => (
            <Grid container justifyContent="center" alignItems="center"  xs={2} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 300, margin: 4, height: 400 }}>
                <iframe title={`mixcloud-${index}`} width="100%" height="400px" src={mix.mixLink}></iframe>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
  );
}

export default Mixes;