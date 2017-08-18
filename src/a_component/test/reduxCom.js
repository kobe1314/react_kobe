import React, { PropTypes as P } from 'react';
import { Table } from 'antd';

class ReduxCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 5,
    };
  }


  render() {
    const {value,onClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={() => {onClick(value);} }>点1击</button>
        <br/>
      </div>
    );
  }
}

ReduxCom.propTypes = {
  value: P.number,
  onClick: P.func,
  fetchValue: P.array,
};

export default ReduxCom;
