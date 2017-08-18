import React, { PropTypes as P } from 'react';
import { connect } from 'react-redux';
import FetchComponent from '../../a_component/test/fetchDataComponent';
import { fetchData } from  '../../a_action/action';

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
        <FetchComponent
          fetchValue={this.props.fetchValue}
        />
        <button onClick={this.props.fetchData}>fetch data</button>
      </div>
    );
  }
}

// ==================
// PropTypes
// ==================

FetchDataContainer.propTypes = {
  testvalue: P.number,
  fetchData:P.func,
  fetchValue: P.array,
};

// ==================
// Export
// ==================

export default connect(mapStateToProps, {fetchData})(FetchDataContainer);
