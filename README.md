# EventRoulette

The purpose of Event Roulette is to help indecisive friends decide on a event nearby that they can all enjoy. <br/>
By entering their address & type of activity, the application will find a suitable activity nearby that they can all enjoy. <br />
Never again do people need to fight over what to do and everything will be in the hands of luck. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.31.

## Issues
1: `No 'Access-Control-Allow-Origin' header is present on the requested resource` on local server <br/ > <br/ >
Solution: Download a CORS Extension for your browser
For chrome: https://chrome.google.com/webstore/detail/cors-toggle/omcncfnpmcabckcddookmnajignpffnh?hl=en/
However if you uploaded the web-application to a server, this issue will not persist

2: `Images will not appear` when you upload the dist folder onto a server <br /> <br />
Solution: navigate into the `/src` folder and copy and paste the `/img` folder into the `/dist` folder to fix image pathing

3: Add a spin again feature

4: Change font and push the form down a little


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
