import './App.css';
import React from 'react';

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
      <p>
      </p>
    </div>
  );
}

export default App;
