import * as React from 'react';
import { Card } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'

// const mixData = [
//   {
//     title: "King Tai 4.28.23",
//     image: "/static/images/fliers/king-tai-4-28-23.jpg",
//     mixLink: "https://drive.google.com/file/d/1CZ7Fj7L8sRmOYCM_jwUUHKbM7sY9bXqx/preview"
//   },
//   {
//     title: "King Tai 3.24.23",
//     image: "/static/images/fliers/king-tai-3-24-23.jpg",
//     mixLink: ""
//   },
//   {
//     title: "King Tai 2.24.23",
//     image: "/static/images/fliers/king-tai-2-24-23.jpg",
//     mixLink: ""
//   }
// ]

const mixCloud = [
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fking-tai-102723%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fsweet-brooklyn-101123%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Ffranklin-park-10723%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fking-tai-92223%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fpride-pregame-at-crown-inn-61423%2F"
  },
  {
    mixLink: "https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fdjgonegurl%2Fking-tai-923%2F"
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
  return (
    <>
      <Grid sx={{ flexGrow: 1, margin: '25px' }} container direction="row" spacing={{ xs: 8, sm: 8, md: 8 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {/* {mixData.map((mix, index) => (
          <Grid container justifyContent="center" alignItems="center"  xs={2} sm={4} md={4} key={index}>
             <Card sx={{ maxWidth: 300, height: 350, margin: 4 }}>
              <CardMedia
                component="img"
                sx={{ width: 300 }}
                image={mix.image}
                alt={`${mix.title} graphic`}
              />
              <iframe title={mix.title} width="300" height="55" src={mix.mixLink}></iframe>
            </Card>
          </Grid>
        ))} */}
        </Grid>
        <Grid sx={{ flexGrow: 1, margin: '25px' }} container direction="row" spacing={{ xs: 8, sm: 8, md: 8 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {mixCloud.map((mix, index) => (
            <Grid container justifyContent="center" alignItems="center"  xs={2} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 300, margin: 4, height: 350 }}>
                <iframe title={`mixcloud-${index}`} width="100%" height="400px" src={mix.mixLink}></iframe>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
  );
}

export default Mixes;