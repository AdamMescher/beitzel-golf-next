import React from 'react';
import Head from 'next/head';
import uuidv4 from 'uuid/v4';

const Meta = () => (
  <Head>
    <title key={uuidv4()}>Beitzel Golf</title>
    <meta lang="en" />
    <meta key={uuidv4()} name="viewport" content="width=device-width, initial-scale=1" />
    <meta key={uuidv4()} charSet="utf-8" />
    <meta name="author" content="Adam Mescher" />
    <meta name="description" content="Personal website for Brian Beitzel, a golf professional based in Raleigh, NC" />
  </Head>
);

export default Meta;
