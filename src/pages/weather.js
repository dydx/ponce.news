import React from 'react';

import Layout from '../components/layout';
import Header from '../components/header';
import Weather from '../components/Weather'

const WeatherPage = () => (
  <Layout>
    <Header />
    <Weather />
  </Layout>
);

export default WeatherPage;
