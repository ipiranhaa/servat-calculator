import React from 'react'
import { Grid } from '@material-ui/core'

interface Props {
  children: any
}

function Layout(props: Props) {
  const { children } = props

  return (
    <Grid container>
      <Grid item xs sm md lg xl>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout
