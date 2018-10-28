import React from 'react';
import Helmet from 'react-helmet';

const Head = ({ metaData }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metaData.title}
    </title>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" />>
  </Helmet>
);

export default Head;

