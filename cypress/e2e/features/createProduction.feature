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
    When I click the image upload icon
    And I upload an image from desktop
    And I enter "Test Production" in "Production Title" field
    And I click on the "What is your job title in this production?" dropdown
    And I select "1st Assistant Camera" from the "What is your job title in this production?" dropdown
    And I click on the "Production Medium" dropdown
    And I select "Animation" from the "Production Medium" dropdown
    And I click on the "Production Genre" dropdown
    And I select "Action" from the "Production Genre" dropdown
    And I click on the "Production Status" dropdown
    And I select "Development" from the "Production Status" dropdown
    And I click on the "Classification" dropdown
    And I select "U" from the "Classification" dropdown
    And I enter "Manchester" in "Location" field
    And I click on the "Production Union" dropdown
    And I select "Equity" from the "Production Union" dropdown
    And I check the "I don’t currently have an estimated shoot date" checkbox
    And I enter "This is a sample project bio" in "Production Bio" field
    And I click on the "Submit" button
    Then I should see the submitted project title
