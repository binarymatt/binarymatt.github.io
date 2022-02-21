import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
//import ContactInfo from 'components/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About" />
      <HeroBanner />
    </Layout>
  );
};

export default ContactPage;
