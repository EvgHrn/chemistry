import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import { LessonType } from "../types/LessonType";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      // backgroundColor: "red",
      margin: theme.spacing(2)
    },
  }),
);

export const Theory = () => {
  const classes = useStyles();

  const store = React.useContext(AppContext);
  const { category, title } = useParams();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        {
          store.find((obj: LessonType) => obj.category === category).lessons.find((obj: any) => obj.title === title).theory.body
        }
      </Paper>
    </div>
  );
}
