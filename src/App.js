import './App.css';
import React from 'react';
import Student from './components/Student'

function App() {
  const [studentData, setStudentData] = React.useState([]);

  const url = new URL("https://api.hatchways.io/assessment/students");
  const fetchParams = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  };

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
    <div className="App">
      <Student
        city="Test City"
        company="Test Company"
        email="test@testmail.com"
        firstName="Johnny"
        grades={[5, 5, 2]}
        id="1"
        lastName="Test"
        pic="https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg"
        skill="Procrastination"
      ></Student>
    </div>
  );
}

export default App;
