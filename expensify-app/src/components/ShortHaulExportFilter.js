import React from 'react';
import DatePicker from 'react-toolbox/lib/date_picker';

export default class ShortHaulExportFilter extends React.Component {
  state = {
    startDate: undefined,
    endDate: undefined
  };

  handleChange = (item, value) => {
    console.log(item, value);
  };

  render () {
    return (
      <section>
        <DatePicker
          label='Start date:'
          onChange={this.handleChange.bind(this, 'startDate')}
          value={this.state.date1}
        />
        <DatePicker
          label='End date:'
          onChange={this.handleChange.bind(this, 'endDate')}
          value={this.state.date1}
        />
      </section>
    );
  }
}
