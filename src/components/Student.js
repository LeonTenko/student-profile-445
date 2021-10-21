import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const vertHeight = "15vh";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    border: "1px solid black",
    height: vertHeight,
    marginBottom: "1vh"
  },
  gridAvatar: {
    border: "1px solid blue",
    display: "flex",
    height: vertHeight,
    width: vertHeight,
    justifyContent: "center",
    alignItems: "center",
    float: "left",

    "& img": {
      width: "90%",
      height: "90%",
      objectFit: "contain",
      borderRadius: "50%",
      border: "1px solid #C0C0C0"
    }
  },

  gridContents: {
    minHeight: vertHeight,
    width: "auto",
    border: "1px solid green",
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

      <div className={classes.gridAvatar}>
        <img src={pic} alt="avatar" />
      </div>

      <div className={classes.gridContents}>
      </div>

      {/* <h1>{firstName} {lastName}</h1>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
      <p>Skill: {skill}</p>
      <p>Average: {calcAverage({ grades })}</p> */}
    </div>
  );
};

export default Student;