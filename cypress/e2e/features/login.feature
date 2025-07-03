Feature: Login Feature

  Scenario: Login with valid credentials
    Given I am on the login page
    When I enters email "syedzubairalam123@gmail.com" and password "Vista@123"
    And clicks on login button
    Then I should see the dashboard page

  Scenario: Login with invalid email and valid password
    Given I am on the login page
    When I enters email "invalidemail@gmail.com" and password "Vista@123"
    And clicks on login button
    Then I should see an error message "Invalid login attempt"

  Scenario: Login with valid email and invalid password
    Given I am on the login page
    When I enters email "syedzubairalam123@gmail.com" and password "WrongPass@123"
    And clicks on login button
    Then I should see an error message "Invalid login attempt"
