import { Helmet } from "react-helmet";
import React from 'react'

export const PageTitle = ({title}) => {
  return (
      <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
  )
}