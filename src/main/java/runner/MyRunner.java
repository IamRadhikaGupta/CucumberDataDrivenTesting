package runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@CucumberOptions(
		dryRun=false,
		features={"C:\\Users\\radhika.gupta\\workspace\\"
				+ "CucumberDataDrivenTesting\\src\\main\\"
				+ "java\\features\\PracticeFormDataDrivenRegularExpressions.feature"},
		glue={"stepdefinitions"},
		plugin={"html:target/site/cucumber-html",
				"json:target/cucumber1.json"},
		tags={"@form"},
		monochrome=true,
		strict=false
		)
@RunWith(Cucumber.class)
public class MyRunner {
	

}
