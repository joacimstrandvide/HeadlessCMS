import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const AboutTemplate = contentfulPage => {
  const richTextConfig = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
  }
  return (
    <main>
      <h2>{contentfulPage.title}</h2>
      <p>{renderRichText(contentfulPage.content, richTextConfig)}</p>
      <GatsbyImage alt="image" image={contentfulPage.image.gatsbyImage} />
    </main>
  )
}

export default AboutTemplate
