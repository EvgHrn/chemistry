import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {LessonCard} from "../LessonCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export const Lessons = () => {
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  // };

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
                <LessonCard/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
