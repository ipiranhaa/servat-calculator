import React from 'react'
import Head from 'next/head'
import { Grid } from '@material-ui/core'

interface Props {
  children: any
}

function Layout(props: Props) {
  const { children } = props

  return (
    <div>
      <Head>
        <title>Servat Calculator</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Grid container justify="center" spacing={16}>
        <Grid item xs sm md lg xl>
          {children}
        </Grid>
      </Grid>
    </div>
  )
}

export default Layout
