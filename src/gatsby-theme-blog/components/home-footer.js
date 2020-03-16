/** @jsx jsx */
import { jsx } from 'theme-ui'

const Footer = ({ socialLinks }) => {
  return (
    <footer
      sx={{
        mt: `4`,
        color: `muted`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      © 2020 · Kyle Gill
    </footer>
  )
}

export default Footer
