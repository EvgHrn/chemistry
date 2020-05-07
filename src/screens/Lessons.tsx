import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { LessonCard } from "../LessonCard";
import { getLessons } from "../data/data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(2),
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

  const { category } = useParams();

  const [lessons, setLessons] = React.useState<string[]>([]);

  console.log("Lessons category: ", category);

  React.useEffect(() => {
    setLessons(getLessons(category));
  }, []);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  // };

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {lessons.map((lesson: string) => (
            <Grid key={lesson} item>
                <LessonCard title={lesson}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
