import React from 'react'

function TopViewLeft() {
  return (<div>
    <div className="p-5">
      <h1>
        Simple GST Billing & Stock Management
      </h1>
      <h2 className="text-body">
        software for your business
      </h2>
      <br />
      <div className="text-secondary">
        Atma Nirbhar Vyaapaari bane
      </div>
    </div>
    <div className="d-flex" style={{ marginLeft: '3rem'}}>
      <div>Made with <span style={{ color: 'red' }}>&#10084;</span> in India</div>
      <div style={{ marginLeft: '1rem' }}><img src="https://mybillbook.in/assets/images/landing-page/iso-black.svg" alt="ISO"/></div>
    </div>
  </div>
  )
}

export default TopViewLeft;
