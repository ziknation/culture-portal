import React from 'react';
import './Team.sass';

import { Grid, Paper, Typography, Avatar, Box, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

interface User {
  id: number;
  name: string;
  photoUrl: string;
  linkGit: string;
  linkLinkedIn: string;
  description: string;
}

function Card({ name, photoUrl, linkGit, linkLinkedIn, description }: User) {
  return (
    <Grid item>
      <Paper className="paper" elevation={3}>
        <Typography className="author">Author</Typography>
        <Grid container justify="flex-start" alignItems="center">
          <Grid item>
            <Box className="avatar_box">
              <Avatar className="avatar" alt="Foto" src={photoUrl} />
            </Box>
          </Grid>
          <Grid item>
            <Typography className="author" variant="h6">
              {name}
            </Typography>
            <Box className="link_box">
              <Box className="link_box--item">
                <Link href={linkGit} target="_blank">
                  <GitHubIcon />
                </Link>
              </Box>
              <Box className="link_box--item">
                <Link href={linkLinkedIn} target="_blank">
                  <LinkedInIcon />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box>{description}</Box>
      </Paper>
    </Grid>
  );
}

export default Card;
