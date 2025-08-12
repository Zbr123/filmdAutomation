Feature: Production Search

  Scenario: Filter and search production results
    Given I am on the login page
    When I enters email "syedzubairalam123@gmail.com" and password "Vista@123"
    And clicks on login button
    Then I should see the dashboard page
    When I click on the side navbar
    And I click on the "Productions" text
    And I click on "Productions List" text
    Then I should see "Production Search" text
    When I click on the Advanced Search button
    And I click on the Type dropdown
    And I select "Animation" from the Type dropdown
    And I click on the Genre dropdown
    And I select "Action" from the Genre dropdown
    And I click on the Status dropdown
    And I select "Pre-Production" from the Status dropdown
    And I click the Search button
    And I should see production search results with Type "Animation" in a user info job title
    And I should see production search results with Status "Pre-Production" in a user info job title

  Scenario: No Search Results Found On Production List
    Given I am on the login page
    When I enters email "syedzubairalam123@gmail.com" and password "Vista@123"
    And clicks on login button
    Then I should see the dashboard page
    When I click on the side navbar
    And I click on the "Productions" text
    And I click on "Productions List" text
    Then I should see "Production Search" text
    When I click on the Advanced Search button
    And I click on the Type dropdown
    And I select "Arena" from the Type dropdown
    And I click on the Genre dropdown
    And I select "Action" from the Genre dropdown
    And I click on the Status dropdown
    And I select "Development" from the Status dropdown
    And I click the Search button
    Then I should see No result found text
