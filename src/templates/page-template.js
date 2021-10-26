import React  from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import SEO from "../components/seo"
import StandardPageBuilder from "../components/standard-page-builder"


const Page = ({ data: { page } }) => {

  const layouts = page.customPageBuilder.pageBuilder;

  return (
    <Layout>
      <SEO 
      title={page.seo.title} 
      description={page.seo.metaDesc}
      metaImage={page.seo.opengraphImage.localFile.childImageSharp.fluid}
      />
      <article>
            {   
                layouts.map((layout, index) => {
                    return <StandardPageBuilder key={index} layoutData={layout} />
                })
            }
      </article>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query PageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      id
      seo {
        title
        metaDesc
        opengraphImage {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
        }
      }
      customPageBuilder {
        pageBuilder {
            __typename
            ... on WpPage_Custompagebuilder_PageBuilder_PageBanner {
                fieldGroupName
                bannerTitle
                bannerBackground {
                    title
                    localFile {
                      childImageSharp {
                        gatsbyImageData (
                            width: 1800
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                      }
                    }
                }
            }
            ... on WpPage_Custompagebuilder_PageBuilder_FullWidthSection {
                fieldGroupName
                fullWidthSectionId
                fullWidthSectionTopPadding
                fullWidthSectionBottomPadding
                fullWidthSectionColorScheme
                fullWidthSectionSectionContent
            }
            ... on WpPage_Custompagebuilder_PageBuilder_CallToAction {
                fieldGroupName
                ctaSectionId
                ctaTopPadding
                ctaBottomPadding
                ctaColorScheme
                ctaContent
                ctaButtonText
                ctaButtonLink
            } 
            ... on WpPage_Custompagebuilder_PageBuilder_TwoColumnsImage {
              fieldGroupName
              twoColSectionId
              twoColTopPadding
              twoColBottomPadding
              twoColColorScheme
              twoColColumnSizes
              twoColImagePosition
              twoColImageMaxWidth
              twoColSectionContent
              twoColSectionImage {
                title
                localFile {
                  childImageSharp {
                    gatsbyImageData (
                        width: 900
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
            ... on WpPage_Custompagebuilder_PageBuilder_GallerySlideshow {
              fieldGroupName
              gallerySectionId
              galleryTopPadding
              galleryColorScheme
              galleryBottomPadding
              slideshowImages {
                title
                sourceUrl
                original: localFile {
                  childImageSharp {
                    gatsbyImageData (
                        width: 1200
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
                thumbnail: localFile {
                  childImageSharp {
                    gatsbyImageData (
                        width: 250
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
        }
      }
    }
  }
`