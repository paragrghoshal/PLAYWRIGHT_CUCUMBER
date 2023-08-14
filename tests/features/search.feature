Feature: Search feature

    Background: 
        Given User navigates to the application
    Scenario Outline: Scenario Outline name
        When I enter value <productname> in search box
        And clicked on seatch button
        Then I should see productname

        Examples:
            | productname |
            | smart phone |
            | laptop |