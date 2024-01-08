import { Helmet } from "react-helmet";
import React from 'react'

export const PageTitle = ({title, featureImage, metaDescription}) => {
  return (
      <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:image" content={featureImage} />
          <meta property="og:description" content={metaDescription} />    
      </Helmet>
  )
}
