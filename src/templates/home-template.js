import React from 'react';

const HomeTemplate = contentfulPage => {
  return (
    <main>
      <h2>{contentfulPage.title}</h2>
      <h3>Hem</h3>
    </main>
  )
}

export default HomeTemplate;
