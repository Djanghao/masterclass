<p>Table: <code>TeamStats</code></p>

<pre>
+------------------+---------+
| Column Name      | Type    |
+------------------+---------+
| team_id          | int     |
| team_name        | varchar |
| matches_played   | int     |
| wins             | int     |
| draws            | int     |
| losses           | int     |
+------------------+---------+
team_id is the unique key for this table.
This table contains team id, team name, matches_played, wins, draws, and losses.
</pre>

<p>Write a solution to calculate the <strong>points</strong> and <strong>rank</strong> for each team in the league. Points are calculated as follows:</p>

<ul>
	<li><code>3</code> points for a <strong>win</strong></li>
	<li><code>1</code> point for a <strong>draw</strong></li>
	<li><code>0</code> points for a <strong>loss</strong></li>
</ul>

<p><strong>Note:</strong>&nbsp;Teams with the same points must be assigned the same rank.</p>

<p>Return <em>the result table ordered by</em> <code>points</code>&nbsp;<em>in&nbsp;<strong>descending</strong>,<strong>&nbsp;</strong>and then by</em> <code>team_name</code> <em>in <strong>ascending </strong>order.</em></p>

<p>The query result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example:</strong></p>

<div class="example-block">
<p><strong>Input:</strong></p>

<p><code>TeamStats</code> table:</p>

<pre class="example-io">
+---------+-----------------+----------------+------+-------+--------+
| team_id | team_name       | matches_played | wins | draws | losses |
+---------+-----------------+----------------+------+-------+--------+
| 1       | Manchester City | 10             | 6    | 2     | 2      |
| 2       | Liverpool       | 10             | 6    | 2     | 2      |
| 3       | Chelsea         | 10             | 5    | 3     | 2      |
| 4       | Arsenal         | 10             | 4    | 4     | 2      |
| 5       | Tottenham       | 10             | 3    | 5     | 2      |
+---------+-----------------+----------------+------+-------+--------+
</pre>

<p><strong>Output:</strong></p>

<pre class="example-io">
+---------+-----------------+--------+----------+
| team_id | team_name       | points | position |
+---------+-----------------+--------+----------+
| 2       | Liverpool       | 20     | 1        |
| 1       | Manchester City | 20     | 1        |
| 3       | Chelsea         | 18     | 3        |
| 4       | Arsenal         | 16     | 4        |
| 5       | Tottenham       | 14     | 5        |
+---------+-----------------+--------+----------+
</pre>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Manchester City and Liverpool both have 20 points (6 wins * 3 points + 2 draws * 1 point), so they share position 1.</li>
	<li>Chelsea has 18 points (5 wins * 3 points + 3 draws * 1 point) and is position 3rd.</li>
	<li>Arsenal has 16 points (4 wins * 3 points + 4 draws * 1 point) and is position 4th.</li>
	<li>Tottenham has 14 points (3 wins * 3 points + 5 draws * 1 point) and is position 5th.</li>
</ul>

<p>The output table is ordered by points in descending order, then by team_name in ascending order.</p>
</div>
