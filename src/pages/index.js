import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Header from '../components/header';
import Banner from '../components/banner';
import Features from '../components/features';
import Articles from '../components/articles';
import Pagination from '../components/pagination';

const IndexPage = () => (
  <Layout>
    <Header />
    <Banner />
    <Features />
    <Articles />
    <Pagination />
  </Layout>
);

export default IndexPage
