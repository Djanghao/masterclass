# Official Solution

**Link:** [https://leetcode.com/problems/league-statistics/solution/](https://leetcode.com/problems/league-statistics/solution/)

---

[TOC]

# Solution

---

## pandas

### Approach: DataFrame Manipulation

The pandas/python algorithm for calculating league statistics involves a high-level process of data integration, calculation, and summarization. It starts by merging team information with match results to contextualize each match with the teams involved. The algorithm then calculates points, goals for, and goals against for each team, based on match outcomes. After processing both home and away matches, the results are consolidated into a single DataFrame. This data is then aggregated by team, summing up the points and goals to capture each team's overall performance in the league. Finally, the algorithm sorts the teams based on their total points, goal difference, and team name to produce a league standings table.

#### Intuition

Let's review the intuition behind each step given the following input DataFrames:

Teams DataFrame (`teams`):

<table>
  <tr>
    <th>team_id</th>
    <th>team_name</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Ajax</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Dortmund</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Arsenal</td>
  </tr>
</table>
<br>


Matches DataFrame (`matches`):

<table>
  <tr>
    <th>home_team_id</th>
    <th>away_team_id</th>
    <th>home_team_goals</th>
    <th>away_team_goals</th>
  </tr>
  <tr>
    <td>1</td>
    <td>4</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>6</td>
    <td>3</td>
    <td>3</td>
  </tr>
  <tr>
    <td>4</td>
    <td>1</td>
    <td>5</td>
    <td>2</td>
  </tr>
  <tr>
    <td>6</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
</table>
<br>

1. **Merging Teams with Matches**
	
   Here, `pd.merge` is used to align the team names with their respective match details for both home and away games so that we can calculate points, goals for, and goals against for each match.

   ```python
   home_matches = pd.merge(matches, teams, left_on='home_team_id', right_on='team_id')
   away_matches = pd.merge(matches, teams, left_on='away_team_id', right_on='team_id')
   ```

`home_matches`:

<table>
  <tr>
    <th>home_team_id</th>
    <th>away_team_id</th>
    <th>home_team_goals</th>
    <th>away_team_goals</th>
    <th>team_id</th>
    <th>team_name</th>
  </tr>
  <tr>
    <td>1</td>
    <td>4</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td>Ajax</td>
  </tr>
  <tr>
    <td>1</td>
    <td>6</td>
    <td>3</td>
    <td>3</td>
    <td>1</td>
    <td>Ajax</td>
  </tr>
  <tr>
    <td>4</td>
    <td>1</td>
    <td>5</td>
    <td>2</td>
    <td>4</td>
    <td>Dortmund</td>
  </tr>
  <tr>
    <td>6</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>6</td>
    <td>Arsenal</td>
  </tr>
</table>
<br>

2. **Calculating Points, Goals For, and Goals Against**

   ```python
	home_matches["points"] = home_matches.apply(
	    lambda x: 3
	    if x["home_team_goals"] > x["away_team_goals"]
	    else (1 if x["home_team_goals"] == x["away_team_goals"] else 0),
	    axis=1,
	)
	home_matches["goal_for"] = home_matches["home_team_goals"]
	home_matches["goal_against"] = home_matches["away_team_goals"]

	away_matches["points"] = away_matches.apply(
	    lambda x: 3
	    if x["away_team_goals"] > x["home_team_goals"]
	    else (1 if x["home_team_goals"] == x["away_team_goals"] else 0),
	    axis=1,
	)
	away_matches["goal_for"] = away_matches["away_team_goals"]
	away_matches["goal_against"] = away_matches["home_team_goals"]
   ```

   The `apply` function with a lambda expression calculates points based on match outcomes and differentiates goals for and against for each match. 
   
   Note that: we have home and away matches in two tables separately. To help concatenate into a single table, we need to standardize how we refer to goals in home and away matches. Specifically, when a team plays at home, their goals are represented by `home_team_goals`, while when they play away, their goals are represented by `away_team_goals`. Therefore, in tables `home_matches` and `away_matches`, we create the following two columns `home_matches` and `away_matches` for each team respectively, for the sake of later concatenation.
   

 `home_matches`:

 <table>
  <tr>
    <th>home_team_id</th>
    <th>away_team_id</th>
    <th>home_team_goals</th>
    <th>away_team_goals</th>
    <th>team_id</th>
    <th>team_name</th>
    <th>points</th>
    <th>goal_for</th>
    <th>goal_against</th>
  </tr>
  <tr>
    <td>1</td>
    <td>4</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
    <td>Ajax</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>6</td>
    <td>3</td>
    <td>3</td>
    <td>1</td>
    <td>Ajax</td>
    <td>1</td>
    <td>3</td>
    <td>3</td>
  </tr>
  <tr>
    <td>4</td>
    <td>1</td>
    <td>5</td>
    <td>2</td>
    <td>4</td>
    <td>Dortmund</td>
    <td>3</td>
    <td>5</td>
    <td>2</td>
  </tr>
  <tr>
    <td>6</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>6</td>
    <td>Arsenal</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
</table>
<br>

3. **Concatenating Home and Away Match Results**

   ```python
   total_matches = pd.concat([home_matches, away_matches])
   ```

   Concatenation is used to unify the match data from both home and away perspectives into a single DataFrame. We'll use this DataFrame in the next step to aggregate statistics for each team.

 `total_matches`:

<table>
  <tr>
    <th>team_name</th>
    <th>points</th>
    <th>goal_for</th>
    <th>goal_against</th>
  </tr>
  <!-- Home Matches -->
  <tr>
    <td>Ajax</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Ajax</td>
    <td>1</td>
    <td>3</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Dortmund</td>
    <td>3</td>
    <td>5</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Arsenal</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <!-- Away Matches -->
  <tr>
    <td>Ajax</td>
    <td>1</td>
    <td>2</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Ajax</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Dortmund</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Arsenal</td>
    <td>1</td>
    <td>3</td>
    <td>3</td>
  </tr>
</table>

<br>

4. **Aggregating Statistics by Team**

   ```python
   result = total_matches.groupby('team_name').agg({
       'team_id': 'count',
       'points': 'sum',
       'goal_for': 'sum',
       'goal_against': 'sum'
   }).rename(columns={'team_id': 'matches_played'})
   ```
   
   The `groupby` and `agg` methods summarize the total matches played, points, goals for, and goals against for each team.

`result`:

<table>
  <tr>
    <th>team_name</th>
    <th>matches_played</th>
    <th>points</th>
    <th>goal_for</th>
    <th>goal_against</th>
  </tr>
  <tr>
    <td>Ajax</td>
    <td>2</td>
    <td>1</td>
    <td>3</td>
    <td>4</td>
  </tr>
  <tr>
    <td>Dortmund</td>
    <td>1</td>
    <td>3</td>
    <td>5</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Arsenal</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
  </tr>
</table>
<br>

5. **Calculating Goal Difference**

   ```python
   result['goal_diff'] = result['goal_for'] - result['goal_against']
   ```
   
   This step involves a simple subtraction between two DataFrame columns to calculate the goal difference.

 `result`:

 <table>
  <tr>
    <th>team_name</th>
    <th>matches_played</th>
    <th>points</th>
    <th>goal_for</th>
    <th>goal_against</th>
    <th>goal_diff</th>
  </tr>
  <tr>
    <td>Ajax</td>
    <td>2</td>
    <td>1</td>
    <td>3</td>
    <td>4</td>
    <td>-1</td>
  </tr>
  <tr>
    <td>Dortmund</td>
    <td>1</td>
    <td>3</td>
    <td>5</td>
    <td>2</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Arsenal</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
</table>
<br>

6. **Sorting the Results**

   ```python
   result = result.sort_values(by=['points', 'goal_diff', 'team_name'], ascending=[False, False, True])
   ```
   
   The `sort_values` method is used to order the DataFrame based on points, goal difference, and team name.

`result`:

<table>
  <tr>
    <th>team_name</th>
    <th>matches_played</th>
    <th>points</th>
    <th>goal_for</th>
    <th>goal_against</th>
    <th>goal_diff</th>
  </tr>
  <tr>
    <td>Dortmund</td>
    <td>1</td>
    <td>3</td>
    <td>5</td>
    <td>2</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Ajax</td>
    <td>2</td>
    <td>1</td>
    <td>3</td>
    <td>4</td>
    <td>-1</td>
  </tr>
  <tr>
    <td>Arsenal</td>
    <td>1</td>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
</table>
<br>


#### Implementation

<iframe src="https://leetcode.com/playground/j6idtbsP/shared" frameBorder="0" width="100%" height="500" name="j6idtbsP"></iframe>

---

## Database

### Approach: Aggregate Ranking

#### Intuition

Here's a breakdown of the logic:

1. **Joining Teams with Matches**:

   The joining operation in SQL allows us to create a comprehensive dataset that combines relevant information from two different tables. By joining the `Teams` and `Matches` tables, we align team names with their respective match performances.

2. **Calculating Points for Each Match**:
   
   The `CASE` statement in SQL is used for conditional logic. Here, it determines how many points to assign to a team based on the match outcome. Note that the team with the id `team_id` may be playing at home or away, so we have to figure out which is the case before we can process the score based on the number of goals scored by both teams. This step is critical because it involves applying the rules of the league directly within the query.

3. **Determining Goals For and Against**:
   
   Again using `CASE`, this part of the query separates goals scored by a team and goals scored against them. 
   
   ```sql
   SUM(CASE WHEN m.home_team_id = t.team_id THEN m.home_team_goals ELSE m.away_team_goals END) AS goal_for,
   SUM(CASE WHEN m.home_team_id = t.team_id THEN m.away_team_goals ELSE m.home_team_goals END) AS goal_against
   ```
   - The `CASE` expression checks whether the team is playing at home (if `m.home_team_id = t.team_id`).
   - If true, `goal_for` is `home_team_goals` (goals scored by the home team) and `goal_against` is `away_team_goals` (goals conceded to the away team).
   - If false (meaning the team is playing away), `goal_for` is `away_team_goals` (goals scored by the away team) and `goal_against` is `home_team_goals` (goals conceded to the home team).

4. **Aggregating Statistics by Team**:
   
   The `GROUP BY` clause is essential in SQL for summarizing or aggregating data. By grouping the data by team, we can apply aggregate functions like `SUM` to calculate total points, goals for, and goals against. 

5. **Calculating Goal Difference**:
   
   This step is about deriving the goal difference from existing data (goals for and against).

6. **Ordering the Results**:
   
   The `ORDER BY` clause is used to sort the data in a specific order as required.



#### Implementation


```mysql []
SELECT 
  t.team_name, 
  COUNT(*) AS matches_played, 
  SUM(
    CASE WHEN (
      m.home_team_id = t.team_id 
      AND m.home_team_goals > m.away_team_goals
    ) 
    OR (
      m.away_team_id = t.team_id 
      AND m.away_team_goals > m.home_team_goals
    ) THEN 3 WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END
  ) AS points, 
  SUM(
    CASE WHEN m.home_team_id = t.team_id THEN m.home_team_goals ELSE m.away_team_goals END
  ) AS goal_for, 
  SUM(
    CASE WHEN m.home_team_id = t.team_id THEN m.away_team_goals ELSE m.home_team_goals END
  ) AS goal_against, 
  SUM(
    CASE WHEN m.home_team_id = t.team_id THEN m.home_team_goals - m.away_team_goals ELSE m.away_team_goals - m.home_team_goals END
  ) AS goal_diff 
FROM 
  Teams t 
  JOIN Matches m ON m.home_team_id = t.team_id 
  OR m.away_team_id = t.team_id 
GROUP BY 
  t.team_id, 
  t.team_name 
ORDER BY 
  points DESC, 
  goal_diff DESC, 
  team_name;

```