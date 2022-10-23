import React from 'react'
import { Container, Menu} from 'semantic-ui-react'

export const Navbar = () => {
  return (
    <Menu inverted widths={3}>
      <Container >

        <Menu.Item name="star wars"></Menu.Item>
        <Menu.Item name="charcater"></Menu.Item>
        <Menu.Item name="planets"></Menu.Item>

      </Container>
    </Menu>
  )
}
