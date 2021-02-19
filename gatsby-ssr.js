const React = require("react")

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  replaceHeadComponents(
    [
      <link
        key="inter"
        rel="stylesheet"
        href="https://unpkg.com/@fontsource/inter@4.1.0/latin.css"
      />,
      <link
        key="source-serif-pro"
        rel="stylesheet"
        href="https://unpkg.com/@fontsource/source-serif-pro@4.1.0/latin.css"
      />,
    ].concat(getHeadComponents())
  )
}
