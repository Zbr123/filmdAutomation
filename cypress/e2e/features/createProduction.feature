Feature: Create a new Production

  Scenario: User should be able to create a new production
    Given I am on the login page
    When I enters email "muhammad.a@yetiinc.com" and password "Staging2024"
    And clicks on login button
    Then I should see the dashboard page
    When I click on the side navbar
    And I click on Productions text
    And I click on Production Suite text
    Then I should see Welcome to Productions text
    When I click on the Create Production button
    Then I should see Production Creation text


    # And I click on the Type dropdown
    # And I select "Animation" from the Type dropdown
    # And I click on the Genre dropdown
    # And I select "Action" from the Genre dropdown
    # And I click on the Status dropdown
    # And I select "Pre-Production" from the Status dropdown
    # And I click the Search button