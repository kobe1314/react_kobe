import React, { PropTypes as P } from 'react';
import { connect } from 'react-redux';
import FetchUserComponent from '../../a_component/test/fetchUserComponent';
import { fetchData,fetchUserInfo } from  '../../a_action/action';

// ==================
// 最终要交给redux管理的所有变量
// ==================


const mapStateToProps = (state) => (
  {
    fetchValue: state.fetchReducer.fetchvalue
  });
class FetchDataContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <FetchUserComponent
          fetchValue={this.props.fetchValue}
        />
        <button onClick={this.props.fetchUserInfo}>fetch user</button>
      </div>
    );
  }
}

// ==================
// PropTypes
// ==================

FetchDataContainer.propTypes = {
  testvalue: P.number,
  fetchUserInfo:P.func,
  fetchValue: P.array,
};

// ==================
// Export
// ==================

export default connect(mapStateToProps, {fetchUserInfo})(FetchDataContainer);
