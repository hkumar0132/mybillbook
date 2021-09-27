import React from 'react';
import Plan from './Plan';

import './BottomView.css';

function BottomView() {
  return (
    <div>
      {/* Top view */}
      <div class="border-orange w-250"></div>
      <div className="d-flex p-5 m-2 statistics">
        <div className="stats">
          <div className="text m-0">1,00,000+</div>
          <div className="m-0 sub-text text-muted">Business Trust Us</div>
        </div>
        <div className="stats">
          <div className="text m-0">30,00,000+</div>
          <div className="m-0 sub-text text-muted">Invoices created</div>
        </div>
        <div className="stats">
          <div className="text m-0">5,000+</div>
          <div className="m-0 sub-text text-muted">Cities & Towns in India</div>
        </div>
        <div className="stats">
          <div className="text m-0 d-flex align-items-center">
            4.5 &nbsp;
            <img src="https://mybillbook.in/static-assets/images/landing-page/star.webp" alt="star icon" height="32" width="32" class="ml-2" loading="lazy"></img>
          </div>
          <div className="text-muted">Rating on Google Play</div>
        </div>
      </div>
      {/* Middle view */}
      <div className="d-flex p-5 m-2">
        <div className="float-left fs-36">
          <div>Now try all benefits of My BillBook app</div>
          <div className="text-color-orange">Free for 14 days</div>
        </div>
        <div>
          <img src="https://st2.depositphotos.com/4681751/6993/v/950/depositphotos_69937303-stock-illustration-30-days-money-back-guarantee.jpg" alt="money back guarantee logo" height="100" width="100"/>
        </div>
      </div>
      {/* Bottom view */}
      <div className="d-flex p-5 statistics">
        <div><Plan type='Silver' costPrevious='1299' costActual='799' features={[
          'Unlimited Stock Adjustments',
          'GST Reports, Profit & Loss Report',
          'Remove MyBillBook logo from invoice',
          'Only Mobile device supported',
          '+ 5 more features'
        ]} mostPopular={false}
        /></div>
        <div><Plan type='Gold' costPrevious='2599' costActual='1799' features={[
          'All Silver Features',
          'Add upto 5 staff to My BillBook',
          'Unlimited Mobile + Desktop Logins'
        ]} mostPopular={true}
        /></div>
        <div><Plan type='Diamond' costPrevious='4599' costActual='3500' features={[
          'All Gold & Silver Features',
          'Add unlimited staff to My Billbook'
        ]} mostPopular={false}/></div>
      </div>
    </div>
  )
}

export default BottomView;