Feature: Edit User Profile Feature

  Scenario: Users should be able to edit their profile
    Given I am on the login page
    When I enters email "syedzubairalam123@gmail.com" and password "Vista@123"
    And clicks on login button
    Then I should see the dashboard page
    When I click on add bio text
    And I click on edit profile button
    And I enters status "Photography" in status field
    And I enters Short Bio "I am new on fimd as a Photographer" in the field
    And I click on the availability dropdown
    And I select "1st Assistant Director" from the Professions dropdown
    And I click on the Gender identity dropdown
    And I select "Male" from the Gender identity dropdown
    And I click on the Ethinic Appearance dropdown
    And I select "White - Caucasian" from the Ethinic Appearance dropdown
    And I click the save button
    Then I should see the message "Your updates have been saved successfully"

    
    

    