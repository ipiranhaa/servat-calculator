import React from 'react'
import styled from 'styled-components'
import UserCardItem from './UserCardItem'

// interface Props {
//   name: string
//   totalPrice: number
// }

const StyledContainer = styled.div`
  position: fixed;
  width: 100vw;
  padding: 0 6vw;
  overflow: auto;
  height: calc(100vh - 56px - 56px);
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
