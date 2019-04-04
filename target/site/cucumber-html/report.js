$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/radhika.gupta/workspace/CucumberDataDrivenTesting/src/main/java/features/PracticeFormDataDrivenRegularExpressions.feature");
formatter.feature({
  "name": "Testing filling a form",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Simple Data Driven testing using Regular Expressions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@form"
    }
  ]
});
formatter.step({
  "name": "i open chrome",
  "keyword": "Given "
});
formatter.step({
  "name": "i go to https://www.toolsqa.com/automation-practice-form/",
  "keyword": "When "
});
formatter.step({
  "name": "i enter \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname"
      ]
    },
    {
      "cells": [
        "anu",
        "gupta"
      ]
    },
    {
      "cells": [
        "john",
        "tim"
      ]
    },
    {
      "cells": [
        "james",
        "morgon"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Simple Data Driven testing using Regular Expressions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@form"
    }
  ]
});
formatter.step({
  "name": "i open chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "PracticeForm.i_open_chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i go to https://www.toolsqa.com/automation-practice-form/",
  "keyword": "When "
});
formatter.match({
  "location": "PracticeForm.i_go_to_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter \"anu\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracticeForm.i_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"gupta\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracticeForm.i_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticeForm.i_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Simple Data Driven testing using Regular Expressions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@form"
    }
  ]
});
formatter.step({
  "name": "i open chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "PracticeForm.i_open_chrome()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027RADHIKA\u0027, ip: \u0027192.168.0.100\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:192)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:178)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:78)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\r\n\tat stepdefinitions.PracticeForm.i_open_chrome(PracticeForm.java:16)\r\n\tat ✽.i open chrome(file:/C:/Users/radhika.gupta/workspace/CucumberDataDrivenTesting/src/main/java/features/PracticeFormDataDrivenRegularExpressions.feature:5)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:7801/status] to be available after 20002 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:102)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:187)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:178)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:78)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\r\n\tat stepdefinitions.PracticeForm.i_open_chrome(PracticeForm.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:45)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(Unknown Source)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:147)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:77)\r\n\t... 50 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "i go to https://www.toolsqa.com/automation-practice-form/",
  "keyword": "When "
});
formatter.match({
  "location": "PracticeForm.i_go_to_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "i enter \"john\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracticeForm.i_enter_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter \"tim\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracticeForm.i_enter_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticeForm.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Simple Data Driven testing using Regular Expressions",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@form"
    }
  ]
});
formatter.step({
  "name": "i open chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "PracticeForm.i_open_chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i go to https://www.toolsqa.com/automation-practice-form/",
  "keyword": "When "
});
formatter.match({
  "location": "PracticeForm.i_go_to_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter \"james\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracticeForm.i_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"morgon\"",
  "keyword": "And "
});
formatter.match({
  "location": "PracticeForm.i_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticeForm.i_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});