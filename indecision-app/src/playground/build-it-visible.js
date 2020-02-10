class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      show: false
    };
  }
  handleToggle() {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>
          {this.state.show ? 'Hide details' : 'Show details'}
        </button>
        {this.state.show && <p>Hey, here are the details!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));