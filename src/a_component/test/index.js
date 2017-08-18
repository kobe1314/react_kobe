import React, { PropTypes as P } from 'react';
import { Table } from 'antd';

class ReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 5,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(
      {
        value: this.state.value + 1,
      }
    );
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <span>{value}</span>
        <button onClick={this.onClick}>点1击</button>
        <br/>
      </div>
    );
  }
}

ReactComponent.propTypes = {
  value: P.number,
  onClick: P.func,
  fetchValue: P.array,
};

export default ReactComponent;
