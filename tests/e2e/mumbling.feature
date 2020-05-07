Feature: Mumbling

    Scenario Outline: Mumbling localhost <string> to <result>
        Given a terminal
        When I execute mumble <string>
        Then I will see <result>
        Examples:
            | string   | result                                      |
            | abcd     | A-Bb-Ccc-Dddd                               |
            | ZSgFJkhj | Z-Ss-Ggg-Ffff-Jjjjj-Kkkkkk-Hhhhhhh-Jjjjjjjj |
            | 123      | Invalid Input                               |
            | £$"      | Invalid Input                               |
            | av by    | Invalid Input                               |