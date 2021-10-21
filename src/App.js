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
    </div>
  );
}

export default App;
