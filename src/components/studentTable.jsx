import React from 'react';
import TableRow from './TableRow.jsx';

class StudentTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{'id': 1, 'name': 'abc', 'age': 25}]
    }
  }
  render() {
    return (<div>
      <table className='stuTable' cellSpacing='4' cellPadding='5' align='center'>
        <tbody>
          {console.log('Data: '+JSON.stringify(this.state.data))}

        </tbody>
      </table>
    </div>);
  }

  componentDidMount() {
      fetch('http://localhost:8087/react/service/getTableData/').then(result => {
        this.setState({data: result});
      });
    }
}

export default StudentTable;
