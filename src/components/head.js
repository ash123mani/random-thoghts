import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import * as config from './config'

const getSchemaOrgJSONLD = ({
  isBlogPost,
  url,
  title,
  image,
  description,
  datePublished,
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: config.title,
    },
  ];

  return isBlogPost
    ? [
      ...schemaOrgJSONLD,
      {
        '@context': 'https://randomthoughts.netlify.com',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': url,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'https://randomthoughts.netlify.com',
        '@type': 'BlogPosting',
        url,
        name: title,
        alternateName: config.title,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
        author: {
          '@type': 'Person',
          name: 'Ashutosh Mani Tripathi',
        },
        publisher: {
          '@type': 'Organization',
          url: 'https://randomthoughts.netlify.com',
          logo: config.logo,
          name: 'Ashutosh',
        },
        mainEntityOfPage: {
          '@type': 'Ashutosh Mani Tripathi',
          '@id': config.url,
        },
        datePublished,
      },
    ]
    : schemaOrgJSONLD;
};



const Head = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const title = `${props.title} | ${data.site.siteMetadata.title}`;
  const description = props.postData && props.postData.excerpt || config.description;
  const image = config.image;
  const url = props.postData && props.postData.slug
    ? `${config.url}${props.postData.slug}`
    : config.url;
  const datePublished = props.isBlogPost && props.postData ? props.postData.publishedDate : false;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost: { props },
    url,
    title,
    image,
    description,
    datePublished,
  });

  return (
    <Helmet >
      <meta name="description" content={`Author:  Ashutosh, Illustrator: Random Thoghts, Lenght: 1 page ${description}`} />
      <meta name="image" content={image} />
      <title>{props.title} | {data.site.siteMetadata.title}</title>

      {/* Schema.org tags */}
      < script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {props.isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={`Author:  Ashutosh, Illustrator: Random Thoghts, Lenght: 1 page ${description}`} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} /> */}
    </Helmet>
  )
};

export default Head;
