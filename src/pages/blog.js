import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../components/layout';

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPortfolio(
          sort: {updatedAt: ASC}
        ) {
          edges {
            node {
              id
              title
              slug
              image {
                gatsbyImage(width: 300)
              }
            }
          }
        }
      }
    `
  );
  return (
    <Layout>
      <p>
        <Link to="/">Till Hem</Link>
      </p>
      <ul className="posts">
        {data.allContentfulPortfolio.edges.map((edge) => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/portfolio/${edge.node.slug}/`}>
                  {edge.node.title}
                </Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.createdAt}</span>
              </div>
              {/* {edge.node.featuredImage && (
                <GatsbyImage
                  className="featured"
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                />
              )} */}
              {/* <p className="excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p> */}
              <div className="button">
                <Link to={`/portfolio/${edge.node.slug}/`}>Läs Mer</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Blog;
