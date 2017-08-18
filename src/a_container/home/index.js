import React, { PropTypes as P } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import Test from '../../a_component/test';
import ReduxCom from '../../a_component/test/reduxCom';
import { onTestAdd, fetchData } from  '../../a_action/action';

// ==================
// 最终要交给redux管理的所有变量
// ==================

const mapStoreStateToProps = (state,ownProps) => (
  console.log(ownProps),
  {
  dispatch: state.dispatch,
  testvalue: state.app.inputvalue,
  fetchValue: state.fetchReducer.fetchvalue,
});

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ReduxCom
          value={this.props.testvalue}
          onClick={this.props.onTestAdd}
          fetchValue={this.props.fetchValue}
        />
        <button onClick={this.props.fetchData}>fetch</button>
      </div>
    );
  }
}

// ==================
// PropTypes
// ==================

HomePageContainer.propTypes = {
  dispatch: P.func,
  onTestAdd: P.func,
  router: P.object,
  testvalue: P.number,
  location: P.any,
  history: P.any,
  fetchData:P.func,
  fetchValue: P.array,
};

// ==================
// Export
// ==================

export default connect(mapStoreStateToProps, {onTestAdd,fetchData})(HomePageContainer);
