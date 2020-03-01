import React from 'react';
import './Director.sass';
import { Box, Grid, Typography } from '@material-ui/core';
import { Trans } from 'react-i18next';
import Directors from '../../locales/en/translation.json';
<<<<<<< HEAD
=======
import YandexMap from './YandexMap';
import TimeLine from './TimeLine';
import WorksTable from './WorksTable';
>>>>>>> upstream/dev

import {
  useParams
} from "react-router-dom";


function Director() {
  let { directorName } = useParams();
<<<<<<< HEAD
  console.log(typeof directorName);
=======
>>>>>>> upstream/dev
  const getKeyValue = (key: any ) => (obj: Record<string, any>) => obj[key];
  return (
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h4" align="center">
            <Trans>
              tr:{directorName}.name
            </Trans>
          </Typography>
          <Trans>
              tr:{directorName}.description
          </Trans>
          <Trans>
              tr:{directorName}.date
          </Trans>
        </Grid>
        <Grid item xs={4}>
          <img className="director-image" src={getKeyValue(directorName)(Directors).img[0]} alt={''}/>
        </Grid>
        <Grid item xs={12}>
          <Box>
<<<<<<< HEAD
            <Typography variant="body1" align="center">
              VerticalTimeline
            </Typography>
=======
            {/* <Trans>
              tr:{name}.timeLine.{k}.text
            </Trans>
 */}
            <TimeLine director={directorName} />
>>>>>>> upstream/dev
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
<<<<<<< HEAD
            <Typography variant="body1" align="center">
              ListWithDirectorsWork
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
=======
            <WorksTable director={directorName} />
          </Box>
        </Grid>
        {/* <Grid item xs={12}>
>>>>>>> upstream/dev
          <Typography variant="body1" align="center">
            Slider with Photo Gallery
          </Typography>
        </Grid>
         <Grid item xs={12}>
           <Box>
            <Typography variant="body1" align="center">
              Youtube video
            </Typography>
           </Box>
<<<<<<< HEAD
=======
        </Grid> */}
        <Grid item xs={12}>
          <Box className="map">
            <YandexMap />
          </Box>
>>>>>>> upstream/dev
        </Grid>
      </Grid>
  );
}

export default Director;
