# StuartTask

## About the project
- This Project contains some automation code for testing https://dashboard.sandbox.stuart.com/ 

## About covered test case
I create an e2e testing scenario for creating schedule job. especially testing the transtion state from **scheduled** to **searching**.
the basic scenario is to create a schedule job, then go to the [schedualed job page](https://dashboard.sandbox.stuart.com/scheduled) and check if the job exist, then after the scheduled time passes we should navigate to [schedualed job page](https://dashboard.sandbox.stuart.com/active) to check if the same order appears in the this page or not.
Since the creating a schedule job from the UI require us to wait for at least 15 mintues which is not conveniant for the automation testing, so I decided to make the login via the UI and creating the schedule job via the GraphQL, unlike the UI, the API does not have that restrication for 15 minutes,
so the approch will be simplly create a schedule job after 1 minute from now and after that one minute we can procced with our assertions.

## Prerequisites of the project
- you need to have the [Chrome](https://www.google.com/chrome/?brand=YTUH&gclid=EAIaIQobChMIqKGnpfWa-wIVYY9oCR2nlwAOEAAYASAAEgLhS_D_BwE&gclsrc=aw.ds) browser installed in your maching
- install [node.js](https://nodejs.org/en/download/), if you are using macOS and you have HomeBrew installed in your mchine just run ```brew install node``` as shown [here](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x)

## How to setup the proejct
- clone the proejct and navigation to the proejct's root directory in the terminal
- run ```npm install cypress --save-dev```

## How to run the project
- run ```npx cypress run --browser chrome```
- open StuartTask/Cypress/Videos directory if you want to see the out put video
