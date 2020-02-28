# S4NForm

This project was generated to automate a form using Protractor

## Setup

### Web Driver

Run `webdriver-manager update`. The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running.

### Running the server

To start up the server, run `webdriver-manager start`.

### Environment setup

You can clone this project using git, just going to the console and run `git clone https://github.com/saospina/S4NForm.git`. 

## Running end-to-end tests

Go to your path and run `npm install` to update the dependencies and then run  `npm run test ` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). You are ready to run end-to-end tests!

## Test cases
### Fill form inputs as name, lastname, email and new password
* Go to the URL `http://3.87.50.247:3000`and enter valid values for name, lastname, email and new password fields
* Be sure the fields are not empty
### Enter a valid date
* Enter a valid date in the form
* And then confirm the date match with the following format yyyy-mm-dd
### Choose a gender 
* Chosse a gender from the radio button
* Must be Male
### Confirm the account has been created
* Go to the button "Crear cuenta" and click it
* Confirm the alert message contain a message welcome


## Further help

To get more help on the Protractor test, please contact me.

