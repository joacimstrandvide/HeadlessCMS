import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const HomeTemplate = contentfulPage => {
  const richTextConfig = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
  }

  return (
    <main className="landing-page">
      <h2>{contentfulPage.title}</h2><br />
      <p>{renderRichText(contentfulPage.content, richTextConfig)}</p>
      <GatsbyImage alt="page image" image={contentfulPage.image.gatsbyImage} />
    </main>
  )
}

export default HomeTemplate
