import React from 'react'
import styled from 'styled-components'
import UserCardItem from './UserCardItem'

// interface Props {
//   name: string
//   totalPrice: number
// }

const StyledContainer = styled.div`
  padding: 0 6vw;
`

function UserCardList() {
  return (
    <StyledContainer>
      <UserCardItem name="PLs" totalPrice={500} />
      <UserCardItem name="PLs" totalPrice={500} />
      <UserCardItem name="PLs" totalPrice={500} />
      <UserCardItem name="PLs" totalPrice={500} />
      <UserCardItem name="PLs" totalPrice={500} />
    </StyledContainer>
  )
}

export default UserCardList
