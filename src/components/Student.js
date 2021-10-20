import React from 'react';

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

  const calcAverage = (grades = [0]) => {
    const grd = grades["grades"];
    const sum = grd.reduce((total, num) => total + num);
    const len = grd.length;
    return (sum / len).toFixed(3) + "%";
  };

  return (
    <div>
      <img src={pic} />
      <h1>{firstName} {lastName}</h1>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
      <p>Skill: {skill}</p>
      <p>Average: {calcAverage({ grades })}</p>
    </div>
  );
};

export default Student;