import React from 'react';
import ReactDOM from 'react-dom';
import StudentTable from './StudentTable.jsx';

class StudentInfoForm extends React.Component{
  render(){
    return (
      <div>
        <div className = 'studentForm'>
          <table className = 'studentTable' cellspacing = '4' cellpadding = '5' align = 'center'>
          <tr>
            <td>Time</td>
            <td>{new Date().toLocaleTimeString()}</td>
          </tr>
            <tr>
              <td>Name</td>
              <td><input type = 'text' id = 'name'/></td>
            </tr>
            <tr>
              <td>Surname</td>
              <td><input type = 'text' id = 'surName'/></td>
            </tr>
            <tr>
              <td>Age</td>
              <td><input type = 'text' id = 'age'/></td>
            </tr>
            <tr>
              <td colspan = '2' align = 'center'><button> Save </button></td>
            </tr>
          </table>
        </div>
        <div>
          <StudentTable />
        </div>
      </div>
    );
  }
}

export default StudentInfoForm;
