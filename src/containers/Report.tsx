import React from 'react'
import styled from 'styled-components'
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import Container from '../components/Container'
import EmptyLabel from '../components/EmptyLabel'
import formatNumber from '../utils/formatNumber'
import { calTotalPrice } from '../utils/calculate'

const StyledListContainer = styled.div`
  padding: 4vh 0;
`

const StyledListItem: React.ComponentType<any> = styled(ListItem)`
  height: 64px;
`

interface Props {
  orderList: any[]
  calculateSetting: {
    isIncludeServiceCharge: boolean
    isIncludeVat: boolean
    serviceCharge: number
    vat: number
  }
}

function Report(props: Props) {
  const { orderList, calculateSetting } = props

  const totalPrice = (price: number) => {
    const { isIncludeServiceCharge, isIncludeVat, serviceCharge, vat } = calculateSetting
    let result: number = price
    if (isIncludeServiceCharge && isIncludeVat) {
      result = calTotalPrice(price, serviceCharge, vat)
    } else if (isIncludeServiceCharge) {
      result = calTotalPrice(price, serviceCharge, null)
    } else if (isIncludeVat) {
      result = calTotalPrice(price, null, vat)
    }

    return formatNumber(result)
  }

  return (
    <Container>
      {orderList.length === 0 && <EmptyLabel />}
      <StyledListContainer>
        <List>
          {orderList.map(item => (
            <StyledListItem key={item.id}>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <Typography color='secondary' variant='subtitle1' gutterBottom>
                  {totalPrice(item.total)}
                </Typography>
              </ListItemSecondaryAction>
            </StyledListItem>
          ))}
        </List>
      </StyledListContainer>
    </Container>
  )
}

export default Report
