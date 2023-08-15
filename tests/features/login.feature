Feature: User Authentication tests

  Background: 
    Given User navigates to the application
    # And User click on the login link

  Scenario Outline: Login should be success
    And User entered the product '<productname>'
    When User click search button
    Then '<productname>' is displayed on product page

    Examples:
        | productname |
        | laptop |
        | smart watch|