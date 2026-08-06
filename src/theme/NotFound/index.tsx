import React, {type ReactNode} from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';

export default function NotFound(): ReactNode {
  return (
    <>
      <PageMetadata title="Seite nicht gefunden" />
      <Layout>
        <NotFoundContent />
      </Layout>
    </>
  );
}
