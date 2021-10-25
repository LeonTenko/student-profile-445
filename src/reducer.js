

const reducer = (state = [], action) => {
  if (action.type === 'studentsNameFiltered') {
    return (
      state.filter((student) => {
        return (
          student.firstName.toLowerCase().startsWith(action.payload.searchParam.toLowerCase()) ||
          student.lastName.toLowerCase().startsWith(action.payload.searchParam.toLowerCase())
        );
      })
    );
  }
  else if (action.type === "studentsTagFiltered") {
    return (
      state.filter((student) => {
        return (
          student.firstName.toLowerCase().startsWith(action.payload.searchParam.toLowerCase()) ||
          student.lastName.toLowerCase().startsWith(action.payload.searchParam.toLowerCase())
        );
      })
    );
  }
  else {
    return (
      state
    );
  }
};

export default reducer;