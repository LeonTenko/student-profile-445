import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    border: "1px solid black",
    padding: "2vh"
  },
  gridAvatar: {
    width: "100%",
    height: "100%",
    border: "1px solid blue",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      borderRadius: "50%",
      border: "1px solid #C0C0C0"

    }
  },
  gridContents: {
    width: "auto",
    height: "100%",
    border: "1px solid green"
  }
});

const Student = ({
  city,
  company,
  email,
  firstName,
  grades,
  id,
  lastName,
  pic,
  skill }) => {
  const classes = useStyles();

  const calcAverage = (grades) => {
    const grd = grades["grades"].map((str) => parseInt(str));
    const sum = grd.reduce((total, num) => total + num);
    const len = grd.length;
    return (sum / len).toFixed(3) + "%";
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={3} >
          <div className={classes.gridAvatar}>
            <img src={pic} alt="avatar" />
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className={classes.gridContents}>
          </div>
        </Grid>
      </Grid>
      {/* <h1>{firstName} {lastName}</h1>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
      <p>Skill: {skill}</p>
      <p>Average: {calcAverage({ grades })}</p> */}
    </div>
  );
};

export default Student;