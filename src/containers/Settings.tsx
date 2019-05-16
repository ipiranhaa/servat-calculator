import React from 'react'
import styled from 'styled-components'
import { FormControl, FormControlLabel, FormGroup, Grid } from '@material-ui/core'
import CustomSwitch from '../components/Switch'

// interface Props {
//   orderList: any[]
//   orderDispatch: any
// }

const StyledGrid: React.ComponentType<any> = styled(Grid)`
  height: calc(100vh - 56px - 56px);
`

function Settings() {
  // const { orderList, orderDispatch } = props

  const genSwitch = (checked: boolean, onChange: any, value: string) => (
    <CustomSwitch checked={checked} onChange={onChange} value={value} />
  )

  return (
    <StyledGrid container direction='row' justify='center' alignItems='center'>
      <FormControl>
        <FormGroup>
          <FormControlLabel
            control={genSwitch(
              true,
              (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.checked),
              'test'
            )}
            label='Service charge'
          />
          <FormControlLabel
            control={genSwitch(
              false,
              (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.checked),
              'test'
            )}
            label='Vat'
          />
        </FormGroup>
      </FormControl>
    </StyledGrid>
  )
}

export default Settings
