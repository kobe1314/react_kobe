import React, { PropTypes as P } from 'react';
import { Table } from 'antd';

class FetchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
     const columns = [
      {
        title: '名字',
        dataIndex: 'fund_name',
        key: 'fund_name',
      },
      {
        title: '策略',
        dataIndex: 'stype_name',
        key: 'stype_name',
      }
    ];
    const {fetchValue} = this.props;
    return (
      <div>
          <Table
          dataSource={(() => {
            if (fetchValue) {
              return fetchValue.map((v) => ({
                fund_name: v.fund_name,
                stype_name: v.stype_name,
              }));
            }
          })()}
          columns={columns}
        /> 
      </div>
    );
  }
}

FetchComponent.propTypes = {
  value: P.number,
  onClick: P.func,
  fetchValue: P.array,
};

export default FetchComponent;
