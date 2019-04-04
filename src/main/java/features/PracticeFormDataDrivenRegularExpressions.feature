Feature: Testing filling a form
@form
Scenario Outline: Simple Data Driven testing using Regular Expressions

Given i open chrome
When i go to https://www.toolsqa.com/automation-practice-form/
And i enter "<firstname>"
And enter "<lastname>"
Then i close the browser

Examples: 
|firstname|lastname|
|anu      |gupta   |
|john     |tim     |
|james	  |morgon  |