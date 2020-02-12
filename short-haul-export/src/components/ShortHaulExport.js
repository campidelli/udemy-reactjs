import React from 'react';
import DateRangePicker from './DateRangePicker';
import SelectGroupsAutocomplete from './SelectGroupsAutocomplete';
import ExpandSearchCheckbox from './ExpandSearchCheckbox';
import DownloadButton from './DownloadButton';

export default class ShortHaulExport extends React.Component {
  render() {
    return (
      <div>
        <h1>Short-Haul Export</h1>
        <p>
          This export contains the driver who have been swithced out of the short-shaul exemption for exceeding
          the air-mile or duty limit restrictions for the selected time period.
        </p>
        <DateRangePicker />
        <SelectGroupsAutocomplete />
        <ExpandSearchCheckbox />
        <DownloadButton />        
      </div>
    );
  }
}
