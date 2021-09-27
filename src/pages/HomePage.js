import React from 'react';
import TopView from '../components/TopView';
import BottomView from '../components/BottomView';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  return (<div>
    <Header homePage={true}/>
    <TopView />
    <BottomView />
    <Footer />
  </div>);
}

export default HomePage;
