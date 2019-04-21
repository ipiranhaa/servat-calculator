import React from 'react'
import styled from 'styled-components'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import ReportIcon from '@material-ui/icons/Assignment'
import AddIcon from '@material-ui/icons/PlaylistAdd'

const StyledBottomNavigation: React.ComponentType<any> = styled(BottomNavigation)`
  position: fixed;
  width: 100%;
  bottom: 0;
`

function AddButton() {
  return (
    <StyledBottomNavigation
      value={0}
      // onChange={this.handleChange}
      showLabels
    >
      <BottomNavigationAction label="Orders" icon={<AddIcon />} />
      <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      <BottomNavigationAction label="Report" icon={<ReportIcon />} />
    </StyledBottomNavigation>
  )
}

export default AddButton
