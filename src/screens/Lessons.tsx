import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  useParams
} from "react-router-dom";
import AppContext from '../context/AppContext';
import { LessonCard } from "../components/LessonCard";
import {LessonType} from "../types/LessonType";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(2),
      width: '100%',
      // flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export const Lessons = () => {

  const classes = useStyles();

  const { category } = useParams();

  const store = React.useContext<LessonType[]>(AppContext);

  const [lessonsTitles, setLessonsTitles] = React.useState<string[]>([]);

  console.log("Lessons category: ", category);

  React.useEffect(() => {
    const lessonObj = store.find((obj: LessonType) => obj.category === category);
    if(lessonObj) {

      setLessonsTitles(lessonObj.lessons.map(lessonObj => lessonObj.title));
    }
  }, []);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center">
          {lessonsTitles.map((lesson: string) => (
            <Grid key={lesson} item>
                <LessonCard category={category} title={lesson}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
