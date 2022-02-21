import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as Styled from './styles';

import { ImageSharpFluid } from 'helpers/definitions';

const Logo: React.FC = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "profile2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;
  const logoImage: ImageSharpFluid = placeholderImage.childImageSharp.fluid;
  console.log(logoImage);
  return (
    <Styled.Logo to="/">
      <Styled.Text>Beaker Labs</Styled.Text>
    </Styled.Logo>
  );
};

export default Logo;
