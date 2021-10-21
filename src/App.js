import './App.css';
import React from 'react';
import Student from './components/Student'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center"
  },
  mainContents: {
    minWidth: "60%",
    height: "75%"
  }
});

function App() {
  const [studentData, setStudentData] = React.useState([]);

  const url = new URL("https://api.hatchways.io/assessment/students");
  const fetchParams = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
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
    console.log(studentData);
  }, [studentData]);

  return (
    <div className={classes.root}>
      <Card className={classes.mainContents}>
        <CardContent >
          {studentData.map(({ id, city, company, email, firstName, grades, lastName, pic, skill }, index) => {
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
