import React from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Care360 is delighted to bring you the latest tools, tips, news and research into aged care designed to keep you informed about aged care."
        />
        <title>Care360 - Find the Best Aged Care For Your Loved One.</title>
        <meta
          property="og:title"
          content="Care360 - Find the Best Aged Care For Your Loved One."
        />
        <meta
          property="og:image"
          content="https://care360.com.au/wp-content/uploads/2023/09/slider-1-1536x800.jpg"
        />
        <meta
          property="og:description"
          content="Care360 is delighted to bring you the latest tools, tips, news and research into aged care designed to keep you informed about aged care."
        />
        <meta
          name="twitter:title"
          content="Care360 - Find the Best Aged Care For Your Loved One."
        />
        <meta
          name="twitter:description"
          content="Care360 is delighted to bring you the latest tools, tips, news and research into aged care designed to keep you informed about aged care."
        />
        <meta
          name="twitter:image"
          content="https://care360.com.au/wp-content/uploads/2023/09/slider-1-1536x800.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <h1>HomePage</h1>
    </div>
  );
}
