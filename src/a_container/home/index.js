import React, { PropTypes as P } from 'react';
import { connect } from 'react-redux';
import ReduxCom from '../../a_component/test/reduxCom';
import { onTestAdd, fetchData } from  '../../a_action/action';

// ==================
// 最终要交给redux管理的所有变量
// ==================

const mapStoreStateToProps = (state,ownProps) => (
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
        />
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
  fetchData:P.func,
  fetchValue: P.array,
};

// ==================
// Export
// ==================

export default connect(mapStoreStateToProps, {onTestAdd,fetchData})(HomePageContainer);
