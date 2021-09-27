import React from 'react'
import Header from '../components/Header';
import ShowItemList from '../components/ShowItemList';
import EditItem from '../components/EditItem';

import '../components/Items.css';

function Items() {
  return (
    <div>
      <Header homePage={false}/>
      <div className="d-flex p-3">
        <div className="w-60"><ShowItemList /></div>
        <div className="w-40"><EditItem /></div>
      </div>
    </div>
  )
}

export default Items;
