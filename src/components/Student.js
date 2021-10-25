import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';

const vertHeight = "10vh";
const imageHeight = "12vh";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    minHeight: vertHeight,
    height: "auto",
    display: "flex",
    marginBottom: "1vh"
  },

  gridAvatar: {
    flex: "1 0",
    display: "flex",
    justifyContent: "center",

    "& img": {
      border: "1px solid #DCDCDC",
      width: imageHeight,
      height: imageHeight,
      margin: "0.5vh",
      objectFit: "contain",
      borderRadius: "50%"
    }
  },

  gridContents: {
    flex: "5 0",
    minHeight: vertHeight,
    width: "auto",
    height: "auto",
    fontFamily: "Raleway",
    "& h1": {
      marginTop: "0",
      textTransform: "uppercase",
      fontSize: "2.2em"
    },
    "& p": {
      margin: "0 2vw"
    },
    "& .MuiTextField-root": {
      margin: "2vh 2vw"
    }
  },

  gridButton: {
    "& button": {
      flex: "1 0",
      display: "flex",
      justifyContent: "right",
      fontSize: "2em",
      color: "#A1A1A1",
      border: "none",
      cursor: "pointer",
      backgroundColor: "transparent",
      "&:hover": {
        color: "black"
      }
    },
  },

  gradeSection: {
    margin: "1.5vh 0",
    "& span": {
      paddingRight: "2vw"
    }
  },

  tagSection: {
    marginTop: "1.5vh",
    marginLeft: "2vw",
    "& span": {
      padding: "0.5vh",
      marginRight: "1vw",
      backgroundColor: "#DCDCDC",
      borderRadius: "15%"
    }
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
  skill,
  studentData,
  tags }) => {

  const [expand, setExpand] = React.useState(false);
  const [displayTags, setDisplayTags] = React.useState(tags);

  const classes = useStyles();

  const calcAverage = (grades) => {
    const grd = grades["grades"].map((str) => parseInt(str));
    const sum = grd.reduce((total, num) => total + num);
    const len = grd.length;
    return (sum / len) + "%";
  };

  const handleButton = (e) => {
    setExpand(!expand);
  };

  const handleTag = (e) => {
    if (e.key === "Enter") {
      const newTags = [...displayTags];
      newTags.push(e.target.value);
      e.target.value = "";

      const tagIndex = studentData.findIndex(student => student.id === id);
      studentData[tagIndex].tags = newTags;
      setDisplayTags(newTags);
    }
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
        <div className={classes.tagSection}>
          {displayTags.map((tag, index) => {
            return (
              <span key={index}>{tag}</span>
            );
          })}
        </div>
        <TextField id="standard-basic" label="Add a tag" variant="standard" onKeyDown={handleTag} />
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