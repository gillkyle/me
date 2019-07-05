exports.onCreateNode = ({ node, getNodesByType, actions }) => {
  const { createNodeField } = actions
  // get Mdx Nodes that should align with BlogPost type
  const MdxNodes = getNodesByType(`Mdx`)

  // only add to BlogPost nodes
  if (node.internal.type === 'BlogPost') {
    // find the matching Mdx node for the BlogPost
    const matchingMdxNode = MdxNodes.find(
      mdxNode => mdxNode.frontmatter.title === node.title
    )

    // add the imageUrl field from the Mdx frontmatter
    createNodeField({
      node,
      name: 'imageUrl',
      value: matchingMdxNode.frontmatter.image,
    })
    // add the shorter description field from frontmatter as well
    createNodeField({
      node,
      name: 'subtitle',
      value: matchingMdxNode.frontmatter.description,
    })
  }
}
