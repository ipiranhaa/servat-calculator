import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

interface Props {
  name: string
  totalPrice: number
}

function UserCardItem(props: Props) {
  const { name, totalPrice } = props

  return (
    <Card>
      <CardMedia
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
      <div>
        <CardContent>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {totalPrice}
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}

export default UserCardItem
