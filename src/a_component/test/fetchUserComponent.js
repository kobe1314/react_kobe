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
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }
    ];
    const {fetchValue} = this.props;
    return (
      <div>
          <Table
          dataSource={(() => {
            if (fetchValue) {
              return fetchValue.map((v) => ({
                name: v.name,
                age: v.age,
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
