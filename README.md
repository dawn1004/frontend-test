# Code test for React frontend developer position
In this folder you will find everything you need to complete the code test. In a real-life situation, the data to work with would need to be fetched from a server and possibly transformed. Since we want this code test to be runnable without an internet connection we have made a JSON dump of such a call and imported this into the project.

If you have any questions during the execution of the test, please feel free to send an e-mail to lasse.woien@wisecloud.ph.

When you have completed the tests or the time is up, we would like you to send a zipfile with everything to lasse.woien@wisecloud.ph
## The task at hand

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The task is to add a proof-of-concept for an actual feature on an app. This feature is the display and visualization of the statistics from a game of ice hockey.

Our designers have come up with the following sketch on what the feature should look like:

![Design Sketch](docs/design-sketch.png)

The actual data for a game is available in JSON format (imported on line 2 in App.js). See below for an explanation of the JSON format. We want you to represent the `recaps` of the game and have a drop down to select if it should show the statistics for the total game or for a specific period.

The team badges can be found in the assets folder and are imported in the components/GameHeader.js

### Limitations and considerations

* The proof-of-concept only needs to display statistics for a specific game (no need to have a dynamic URL).
* The exact font-families and colors can be different from the sketch (but try to get fairly close).
* The structure of the project can be modified. If you want to, you can re-generate or re-create the whole project from scratch.
* The UI should be responsive and work both on desktop computers and mobile phones.
* You can add other frameworks and packages if you would like to.
* The @testing-library packages are included with Create React App, but if deemed appropriate you are free to change into corresponding tests of your choice.
* The actual statistical indicators are not the same in the data as in the sketch. A list of common ice hockey statistics abbreviations can be found on Wikipedia: https://en.wikipedia.org/wiki/Ice_hockey_statistics

### Nice to have
* If possible, make sure it works on the most common web browsers (e.g. Chrome, FireFox, IE11, Edge, Safari).
* Tests for implemented components/functions.
* Possibility to use a dynamic route for fetching which game to load (game ID 12771 is the default right now).
* TypeScript support for all components implemented.

---
## Explanation of the JSON data
Field names are case sensitive i.e. awayteamId and awayTeamId is two different fields with different values
## recaps
This object contains the named field 'gameRecap' which is the total sum of all periods, it also contains a zero based list of the different periods of the game.

| Field name | Description |
|------------|-------------|
| periodNumber | The period number, 0 for the total recap of the game |
| gameStatsId | Id of the game from the statistics provider |
| status | Status of the game |
| awayTeamId | Team code/Id of the away team |
| awayTeamName | Name of the away team |
| awayG | Goals scored in this period by the away team |
| awayPIM | Number of penalty minutes taken by the away team |
| awayFOW | Number of face offs the away team won |
| awaySOG | Shots on goal by the away team |
| awaySPG | Shots that missed the goal by the away team |
| awaySaves | Numver of saved shots by the away team's goalkeeper |
| awayGA | Number of goals the away team let in |
| awaySavesPerShot | Percentage of shoots the away team goalkeeper saved (decimal number from 0 -> 1) |
| awayPP_perc | Percantage of how many goals made during power plays for the away team |
| awaySH_perc | Percentage of how many short handed goals the away team made during their penalty killing |
| awayPPG | Number of goals the away team made during their power plays |
| awaySHG| Number of goals the away team made during their penalty killing |
| awayPPGA | Number of goals the away team let in during their penalty killing |
| awaySHGA | Number of goals the away team let in during their power plays |
| awayNumPP | How many power plays the away team had |
| awayNumSH | How many penalty killing the away team had |
| awayHits | Number of hits the away team made |
| awayPPSOG | Number of shots the away team made during their power plays |
| awayactiontype | Where did this report come from (api, new) |
| awayteamId | Uuid of the away team |
| startDateTime | Start date and time of the game |
| endDateTime | end date and time of the game |
| statusString | Status string of the game |
| statsId | If of the game from the statistics provider |
| homeTeamId | Team code/Id of the home team |
| homeTeamName | Name of the home team |
| homeG | Goals scored in this period by the home team |
| homePIM | Number of penalty minutes taken by the home team |
| homeFOW | Number of face offs the home team won |
| homeSOG | Shots on goal by the home team |
| homeSPG | Shots that missed the goal by the home team |
| homeSaves | Numver of saved shots by the home team's goalkeeper |
| homeGA | Number of goals the home team let in |
| homeSavesPerShot | Percentage of shoots the home team goalkeeper saved (decimal number from 0 -> 1) |
| homePP_perc | Percantage of how many goals made during power plays for the home team |
| homeSH_perc | Percentage of how many short handed goals the home team made during their penalty killing |
| homePPG | Number of goals the home team made during their power plays |
| homeSHG | Number of goals the home team made during their penalty killing |
| homePPGA | Number of goals the home team let in during their penalty killing |
| homeSHGA | Number of goals the home team let in during their power plays |
| homeNumPP | How many power plays the home team had |
| homeNumSH | How many penalty killing the home team had |
| homeHits | Number of hits the home team made |
| homePPSOG | Number of shots the home team made during their power plays |
| homeactiontype | Where did this report come from (api, new) |
| hometeamId | Uuid of the home team |

---
## playersByTeam
This object consists of two headling keys that is the same value as for the awayTeamId and homeTeamId in the recaps object. Under these keys there are two other keys `GK` which is an array of the goalkeeper in the line up for that team of this game. And the `players` which is an array of the players (forwards, centers and defensemen) in the line up for that team of this game.

### GK
| Field name | Description |
|------------|-------------|
| player | The Id from the statistics provider for the goalkeeper |
| game | gameStatsId of the game this statistics is for |
| team | Team code/Id of the team this goalkeeper belongs to |
| jersey | Jersey the goalkeeper is using for this game |
| line | Which line this player is in, -1 for a goalkeeper |
| position | Position of the player, GK equals a goalkeeper |
| firstName | First name of the goalkeeper |
| familyName | Family/Surename of the goalkeeper |
| pim | Number of penalty minute the goalkeeper have been taken this game |
| actiontype | Where did this report come from (api, new) |
| teamId | Uuid of the team the goalkeeper belongs to |
| tot_ga | The total number of goals the goalkeeper let in |
| tot_soga | The total number of shots against the goalkeeper |
| tot_spga | The total number of shots that didn't hit the goal against the goalkeeper |
| tot_svs | The total number of saves the goalkeeper made |
| tot_svs_perc | Percentage of how many shots against the goalkeeper saved |
| tot_nonso_svs_perc |  Percentage of how many shots against the goalkeeper saved, not including a possible penalty shoout out |
### players
| Field name | Description |
|------------|-------------|
| player | The Id from the statistics provider for the player |
| game | gameStatsId of the game this statistics is for |
| team | Team code/Id of the team this player belongs to |
| jersey | Jersey the player is using for this game |
| line | Which line this player is in |
| position | Position of the player, explanation of the different position will be listed in a new table below |
| firstName | First name of the player |
| familyName | Family/Surename of the player |
| pim | Number of penalty minute the player have been taken this game |
| actiontype | Where did this report come from (api, new) |
| teamId | Uuid of the team the player belongs to |
| hits | Number of hits this player have done |
| g | Number of goal the player have made |
| a | Number of assists the player have made |
| toi | The time the player have been on the ice, mm:ii  |
| shg | The number of short handed goals the player have made during penalty killing |
| ppg | The number of goals the player have made during power plays |
| fo_perc | The percentage of won face offs for the player |
| sw | Number of shots that was wide of the goal for the player |
| sog | Number of shots on goal for the player |
| ppsog | Number of shots on goal during power plays for the player |
| nep | Number of goals the team let in when the player was on the ice |
| pop | Number of goals the team made when the player was on the ice |
| netPlusMinus | pop - nep to describe on how many goals forward and goals against the player was on the ice during |
| tp | Total point for the player (a sum of the goals and assists for the player) |
| fo_tot | Total number face off the player have been taken |
| fow | the number of won face off for the player |
| fol | The number of lost face off for the player |

### Positions
| Code | Description |
|------------|-------------|
| GK | Goalkeeper |
| LD | Left defense man |
| RD | Right defense man |
| CE | Center |
| LW | Left wing (forward) |
| RW | Right wing (forward) |
