import React from 'react';

import { Button } from 'reactstrap';

import './BottomView.css';

function EditItem() {
  return (
    <div>
      <div className="item-header">Create/Edit Items</div>
      <div className="item-form d-flex">
        <div>
          <label>Item Name *</label>
          <input placeholder="Enter Item name"/>
        </div>
        <div>
          <label>Item Code</label>
          <input placeholder="Enter Item Code"/>
        </div>
      </div>
      <div>
        Stock & Pricing details (Optional)
      </div>
      <div>
        <div className="d-flex">
          <div>
            <label>Sales Price</label>
            <input placeholder="0"/>
          </div>
          <div>
            <label>Purchase Price</label>
            <input placeholder="0"/>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <label>Measuring UNIT</label>
            <select>
              <option>Select Unit</option>
              <option>pcs</option>
              <option>boxes</option>
              <option>gms</option>
              <option>kgs</option>
              <option>ltr</option>
            </select>
          </div>
          <div>
            <label>Opening Stock Date</label>
            <input type="date"/>
          </div>
        </div>
      </div>
      <Button className="save">Save</Button>
    </div>
  );
}

export default EditItem;