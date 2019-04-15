import React from 'react'
import Head from 'next/head'

type Props = {
  children: any
}

export default ({ children }: Props) => (
  <div>
    <Head>
      <title>Servat Calculator</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <footer>Footer</footer>
  </div>
)
