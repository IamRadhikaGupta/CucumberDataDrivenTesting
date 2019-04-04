package stepdefinitions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PracticeForm {
	WebDriver driver;
	@Given("^i open chrome$")
	public void i_open_chrome() {
		System.setProperty("webdriver.chrome.driver", 
				"C:\\JarFiles\\Drivers\\chromedriver.exe");
	    driver= new ChromeDriver();
	    }
	@When("^i go to ([^\"]*)$")
	public void i_go_to_url(String url) {
	    driver.get(url);
	}

@And("^i enter \"([^\"]*)\"$")
public void i_enter_firstname(String firstname) {
    driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys(firstname);
}

@And("^enter \"([^\"]*)\"$")
public void i_enter_lastname(String lastname) {
	driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys(lastname);
}

@Then("^i close the browser$")
public void i_close_the_browser() {
    System.out.println("closing browser");
}



}
