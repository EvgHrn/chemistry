import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'auto',
    width: 250,
    height: 320,
    margin: 10,
  },
  media: {
    height: 120,
  },
  title: {
    height: 80,
  },
  actions: {
    paddingTop: 15
  }
});

export const LessonCard = (props: LessonCardPropsType) => {

  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Button size="medium" color="primary" href={`/theory/${props.category}/${props.title}`}>
            Теория
          </Button>
          <Button size="medium" color="primary">
            Тест
          </Button>
        </CardActions>
      </Card>
  );
};

interface LessonCardPropsType {
  category: string,
  title: string
}
