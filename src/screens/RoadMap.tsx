import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppContext from '../context/AppContext';
import {LessonType} from "../types/LessonType";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: '100%',
      // maxWidth: 360,
      // backgroundColor: theme.palette.background.paper,
      // backgroundColor: "red",
    },
  }),
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export const RoadMap = () => {

  const classes = useStyles();
  const store = React.useContext(AppContext);

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        {
          store.map((obj: LessonType) => {
            const category = obj.category;
            return (
              <ListItemLink href={`/lessons/${category}`} key={category}>
                <ListItemText primary={category}/>
              </ListItemLink>
            );
          })
        }
      </List>
    </div>
  );
};
