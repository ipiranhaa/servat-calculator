import React from 'react'
import { Stepper, Step, StepLabel, Typography } from '@material-ui/core'

function getSteps() {
  return ['Add price of orders', 'Report']
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return 'Adding orders'
    case 1:
      return 'What is an ad group anyways?'
    case 2:
      return 'This is the bit I really care about!'
    default:
      return 'Unknown stepIndex'
  }
}

function StepProgress() {
  const steps = getSteps()

  return (
    <div>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {/* {this.state.activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={this.handleReset}>Reset</Button>
          </div>
        ) : ( */}
        <div>
          <Typography>{getStepContent(0)}</Typography>
          <div>
            {/* <Button
                  disabled={0 === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleNext}>
                  {0 === steps.length - 1 ? 'Finish' : 'Next'}
                </Button> */}
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  )
}

export default StepProgress
