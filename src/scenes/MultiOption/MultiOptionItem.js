import React from 'react';
import { selectMultiOptionItem } from '../../actions';

const MultiOptionItem = ({item, onClick}) => {
  return (
    <div
      key={item.id.toString()}
      className={theclass}
      onClick={e => {
        e.preventDefault();
        dispatch(selectMultiOptionItem(item.id))
      }}>
      <div className="title">{item.title}</div>
      <div>
        <FontAwesome
          className='super-crazy-colors'
          name={item.icon}
          size='3x'
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
      </div>
    </div>;
  );
};


export default Link
