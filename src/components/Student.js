import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const vertHeight = "10vh";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    border: "1px solid black",
    minHeight: vertHeight,
    height: "auto",
    display: "flex",
    marginBottom: "1vh"
  },
  gridAvatar: {
    flex: "1 0",
    border: "1px solid blue",
    display: "flex",
    justifyContent: "center",

    "& img": {
      width: "12vh",
      height: "12vh",
      margin: "0.5vh",
      objectFit: "contain",
      borderRadius: "50%",
      border: "1px solid #C0C0C0"
    }
  },

  gridContents: {
    flex: "5 0",
    minHeight: vertHeight,
    width: "auto",
    height: "auto",
    border: "1px solid green",
    fontFamily: "Raleway",
    "& h1": {
      marginTop: "0",
      textTransform: "uppercase",
      fontSize: "2.2em"
    },
    "& p": {
      margin: "0 2vw"
    }
  },

  gridButton: {
    border: "1px solid pink",

    "& button": {
      flex: "1 0",
      display: "flex",
      justifyContent: "right",
      fontSize: "2em",
      color: "#A1A1A1",
      border: "none",
      cursor: "pointer",
      backgroundColor: "transparent"
    }
  },
  gradeSection: {

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

  const [expand, setExpand] = React.useState(false);

  const classes = useStyles();

  const calcAverage = (grades) => {
    const grd = grades["grades"].map((str) => parseInt(str));
    const sum = grd.reduce((total, num) => total + num);
    const len = grd.length;
    return (sum / len).toFixed(2) + "%";
  };

  const handleButton = (e) => {
    setExpand(!expand);
  };

  return (
    <div className={classes.root}>

      <div className={classes.gridAvatar}>
        <img src={pic} alt="avatar" />
      </div>

      <div className={classes.gridContents}>
        <h1>{firstName} {lastName}</h1>
        <p>Email: {email}</p>
        <p>Company: {company}</p>
        <p>Skill: {skill}</p>
        <p>Average: {calcAverage({ grades })}</p>
        <div className={classes.gradeSection} hidden={!expand}>
          {grades.map((grade, index) => {
            return (
              <p key={index}>
                <span>Test {index + 1}: </span>
                <span>{grade}%</span>
              </p>
            );
          })}
        </div>
      </div>

      <div className={classes.gridButton}>
        <button type="button" onClick={handleButton}>
          <i className={expand ? "fa fa-minus" : "fa fa-plus"}></i>
        </button>
      </div>

    </div>
  );
};

export default Student;