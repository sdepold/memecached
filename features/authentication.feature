Feature: User authentication
  As an admin of memecached
  I want to be able to create memes
  So that consumers can see them

  Scenario: Opening the admin interface when not logged in
    Given I open the admin interface
    Then  I should see the notification "login required"
