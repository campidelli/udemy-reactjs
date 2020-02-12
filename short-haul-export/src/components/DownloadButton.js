import React from 'react';
import Button from 'react-toolbox/lib/button';

export default class DownloadButton extends React.Component {
  handleDownloadCSV = () => {
    this.props.addCard();
  }
  render() {
    return (
      <div>
        <Button raised primary onClick={this.handleDownloadCSV}>Download</Button>
      </div>
    );
  }
}
