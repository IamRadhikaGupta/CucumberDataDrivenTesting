Feature: Testing filling a form
@form
Scenario: Simple Data Driven testing using Regular Expressions

Given i open chrome
When i go to url https://www.toolsqa.com/automation-practice-form/
And i enter firstname as hjk
And i enter lastname as kjkl
Then i close the browser

