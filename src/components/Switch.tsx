import React from 'react'
import styled from 'styled-components'
import { Switch } from '@material-ui/core'

interface Props {
  checked: boolean
  onChange: any
}

const StyledSwitch: React.ComponentType<any> = styled(Switch)`
  .icon {
    width: 30px;
    height: 30px;
  }
`

function CustomSwitch(props: Props) {
  const { checked, onChange } = props

  return <StyledSwitch checked={checked} onChange={onChange} />
}

export default CustomSwitch
