import React from "react"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ContactTemplate = contentfulPage => {
  const richTextConfig = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
  }
  return (
    <main>
      <h2>{contentfulPage.title}</h2>
      <p>{renderRichText(contentfulPage.content, richTextConfig)}</p>
    </main>
  )
}

export default ContactTemplate
