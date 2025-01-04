import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import RowList from '../../components/Rows/RowList/RowList';
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
}

export default Home;
