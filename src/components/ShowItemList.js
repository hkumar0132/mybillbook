import React, { useState } from 'react';

import './Items.css';

function ShowItemList() {

  const [itemList, setItemList] = useState([{
    'item-name': 'XYZ Story book',
    'item-code': 'BK 12345',
    'selling-price': '1500',
    'purchase-price': '1200',
    'unit': 'PCS',
    'date': '12/07/21'
  },
  {
    'item-name': 'XYZ Story book',
    'item-code': 'BK 12345',
    'selling-price': '1500',
    'purchase-price': '1200',
    'unit': 'PCS',
    'date': '12/07/21'
  }
  ]);

  return (
    <div>
      <div className="item-header">Items</div>
      <div>
        {/* Search bar */}
        <div className="d-flex mt-3 search">
          <input type="text" class="form-control" placeholder="Search Items" />
        </div>
        {/* Item list */}
        <div className="p-3">
          <table className="p-5">
            <thead>
              <tr>
                <th>ITEM NAME</th>
                <th>ITEM CODE</th>
                <th>SELLING PRICE</th>
                <th>PURCHASE PRICE</th>
                <th>UNIT</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
            {itemList.map(item => {
                return (
                  <tr>
                    <td>{item['item-name']}</td>
                    <td>{item['item-code']}</td>
                    <td>{item['selling-price']}</td>
                    <td>{item['purchase-price']}</td>
                    <td>{item['unit']}</td>
                    <td>{item['date']}</td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowItemList;
