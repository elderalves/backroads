import * as React from 'react';
import { Link } from 'gatsby';

import styles from '../css/error.module.css';
import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <Link to="/" className="btn-white">back to home page</Link>
        </Banner>
      </header>
    </Layout>
  )
}