import React from 'react';
import DatePicker from 'react-toolbox/lib/date_picker';

export default class DateRangePicker extends React.Component {
  state = {
    startDate: undefined,
    endDate: undefined
  };

  handleInputChange = (value, name) => {
    console.log(value, name);
  };

  render() {
    return (
      <div>
        <DatePicker label='Start' value={this.state.startDate} onChange={(value) => this.handleInputChange(value, 'startDate')}/>
        <DatePicker label='End' value={this.state.endDate} onChange={(value) => this.handleInputChange(value, 'endDate')}/>
      </div>
    );
  }
}
