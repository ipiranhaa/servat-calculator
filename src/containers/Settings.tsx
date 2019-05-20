import React from 'react'
import styled from 'styled-components'
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  InputAdornment,
} from '@material-ui/core'
import CustomSwitch from '../components/Switch'
import {
  setServiceChargeToggle,
  setVatToggle,
  setServiceCharge,
  setVat,
} from '../actions/settingsAction'

interface Props {
  calculateSetting: {
    isIncludeServiceCharge: boolean
    isIncludeVat: boolean
    serviceCharge: number
    vat: number
  }
  settingsDispatch: any
}

const StyledGrid: React.ComponentType<any> = styled(Grid)`
  height: calc(100vh - 56px - 56px);
`

const StyledInput: React.ComponentType<any> = styled(Input)`
  input {
    text-align: right;
  }
`

function Settings(props: Props) {
  const { calculateSetting, settingsDispatch } = props

  const handleServiceChargeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action: any = setServiceChargeToggle(e.target.checked)
    settingsDispatch(action)
  }

  const handleVatToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action: any = setVatToggle(e.target.checked)
    settingsDispatch(action)
  }

  const handleServiceChargeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action: any = setServiceCharge(parseInt(e.target.value, 10))
    settingsDispatch(action)
  }

  const handleVatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action: any = setVat(parseInt(e.target.value, 10))
    settingsDispatch(action)
  }

  const genSwitch = (checked: boolean, onChange: any) => (
    <CustomSwitch checked={checked} onChange={onChange} />
  )

  return (
    <StyledGrid container direction='row' justify='center' alignItems='center'>
      <FormControl>
        <FormGroup>
          <FormControlLabel
            control={genSwitch(calculateSetting.isIncludeServiceCharge, handleServiceChargeToggle)}
            label='Service charge'
          />
          <StyledInput
            type='number'
            value={calculateSetting.serviceCharge}
            onChange={handleServiceChargeChange}
            endAdornment={<InputAdornment position='end'>%</InputAdornment>}
            disabled={!calculateSetting.isIncludeServiceCharge}
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={genSwitch(calculateSetting.isIncludeVat, handleVatToggle)}
            label='Vat'
          />
          <StyledInput
            type='number'
            value={calculateSetting.vat}
            onChange={handleVatChange}
            endAdornment={<InputAdornment position='end'>%</InputAdornment>}
            disabled={!calculateSetting.isIncludeVat}
          />
        </FormGroup>
      </FormControl>
    </StyledGrid>
  )
}

export default Settings
