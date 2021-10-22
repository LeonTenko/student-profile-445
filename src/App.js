import './App.css';
import React from 'react';
import Student from './components/Student'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  mainContents: {
    minWidth: "60%",
    height: "75%",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "0.4em"
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
  searchBar: {
    paddingBottom: "1vh"
  }
});

function App() {
  const [studentData, setStudentData] = React.useState([]);
  const [outputData, setOutputData] = React.useState([]);

  const url = new URL("https://api.hatchways.io/assessment/students");
  const fetchParams = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  };

  const handleSearch = (e) => {
    const searchParam = e.target.value;

    const newData = studentData.filter((student) => {
      return student.firstName.toLowerCase().startsWith(searchParam.toLowerCase()) ||
        student.lastName.toLowerCase().startsWith(searchParam.toLowerCase());
    });

    setOutputData(newData);
  };

  const classes = useStyles();

  const getStudentData = async () => {
    let response = await fetch(url, fetchParams);

    let responseJSON = await response.json();

    let responseArray = responseJSON['students'];

    setStudentData(responseArray);
  };

  React.useEffect(() => {
    getStudentData();
  }, []);

  React.useEffect(() => {
    setOutputData(studentData);
  }, [studentData]);

  return (
    <div className={classes.root}>
      <Card className={classes.mainContents}>
        <CardContent >
          <div className={classes.searchBar}>
            <TextField fullWidth id="standard-basic" label="Search by name" variant="standard" onChange={handleSearch} />
          </div>
          {outputData.map(({ id, city, company, email, firstName, grades, lastName, pic, skill }, index) => {
            return (
              <Student
                key={id}
                id={id}
                city={city}
                company={company}
                email={email}
                firstName={firstName}
                grades={grades}
                lastName={lastName}
                pic={pic}
                skill={skill}
              ></Student>
            );
          })}
        </CardContent>
      </Card>
    </div>


  );
}

export default App;
