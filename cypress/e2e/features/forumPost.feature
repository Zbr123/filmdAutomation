Feature: Forum post

  Scenario: User should be able to ask question on forum page
    Given I am on the login page
    When I enters email "syedzubairalam123@gmail.com" and password "Vista@123"
    And clicks on login button
    Then I should see the dashboard page
    When I click on the side navbar
    And I click on the "Resources" text
    And I click on "Forums" text
    Then I should see "Forum" text
    When I click on "Ask Question" button
    And I enter "Testing Question" in your Question field
    And I enter "testttttt" int the morre information field
    And I click on Category dropdown
    And I select Directing from dropdown
    And I clicks on Submit button
    Then I should see forum success message


