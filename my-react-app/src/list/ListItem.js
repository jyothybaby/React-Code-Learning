
import React from 'react';
import Label1 from './Label1';
function ListItem() {
    return (
      <div>
        <div className="list-descr">
          This is a very big description
        </div>
        <div className="list-label">
          <Label1 />
          <span>Label2 </span>
          <span>Label3 </span>
          <span>Label4 </span>
        </div>
      </div>
    )
  }

export default ListItem;