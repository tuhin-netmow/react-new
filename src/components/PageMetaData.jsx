import { Helmet } from "react-helmet";
import React from 'react'

export const PageMetaData = ({ title, featureImage, metaDescription }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription} />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={featureImage} />
      <meta property="og:description" content={metaDescription} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={featureImage} />
      <meta name="twitter:card" content="summary_large_image"/>

    </Helmet>
  )
}
