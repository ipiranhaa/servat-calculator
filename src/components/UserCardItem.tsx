import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

interface Props {
  name: string
  totalPrice: number
}

const StyledCard: React.ComponentType<any> = styled(Card)`
  display: flex;
  margin: 4vh 0;
`

const StyledContentContainer: React.ComponentType<any> = styled.div`
  flex-direction: column;
`

const StyledCardMedia: React.ComponentType<any> = styled(CardMedia)`
  width: 100px;
`

function UserCardItem(props: Props) {
  const { name, totalPrice } = props

  return (
    <StyledCard>
      <StyledCardMedia
        image="http://inded.rmutsv.ac.th/main/sites/default/files/Blank_avatar.jpeg"
        title="Live from space album cover"
      />
      <StyledContentContainer>
        <CardContent>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {totalPrice}
          </Typography>
        </CardContent>
      </StyledContentContainer>
    </StyledCard>
  )
}

export default UserCardItem
