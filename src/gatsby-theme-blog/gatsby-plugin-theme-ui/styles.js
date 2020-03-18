export default {
  root: {
    fontFamily: `body`,
  },
  pre: {
    variant: `prism`,
    fontFamily: `monospace`,
    tabSize: 4,
    hyphens: `none`,
    marginBottom: 2,
    color: `white`,
    bg: `prism.background`,
    overflow: `auto`,
    borderRadius: 10,
    p: 3,
  },
  code: {
    fontFamily: `monospace`,
    // from typography overrideThemeStyles
    // "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code"
    fontSize: `inherit`,
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `secondary`,
    bg: `highlight`,
    paddingTop: `0.15em`,
    paddingBottom: `0.05em`,
    paddingX: `0.2em`,
  },
  // from typography overrideThemeStyles
  a: {
    color: `primary`,
  },
  hr: {
    borderColor: `#ccc`,
  },
  p: {
    code: {
      fontSize: `inherit`,
    },
  },
  img: {
    borderRadius: 10,
    mx: -1,
  },
  li: {
    code: {
      fontSize: `inherit`,
    },
  },
  strong: {
    color: `black`,
  },
  h1: {
    fontSize: 40,
  },
  h2: {
    mt: 4,
  },
  h3: {
    mt: 3,
    mb: 1,
  },
  blockquote: {
    color: `inherit`,
    borderLeftColor: `inherit`,
    opacity: 0.8,
    '&.translation': {
      fontSize: `1em`,
    },
  },
}
