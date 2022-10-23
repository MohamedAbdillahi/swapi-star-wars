import React from 'react'
import {Card, Grid} from 'semantic-ui-react'

export const Character = ({data}) => {
  return (
    <>
    <h1>Star war Characters</h1>
    <Grid columns={3} >
      {data.map((people, i) => {
        const {name, height, mass, hair_color} = people
        return (
          <Grid.Column key={i}>
            <Card>
              <Card.Content>
                <Card.Header>
                  {name}
                </Card.Header>
                <Card.Description>
                  <strong>height</strong>
                  <p>{height}</p>
                  <strong>Mass</strong>
                  <p>{mass}</p>
                  <strong>hair color</strong>
                  <p>{hair_color}</p>
                </Card.Description>
              </Card.Content>

            </Card>

          </Grid.Column>
        )
      })}
    </Grid>


    </>
  )
}
