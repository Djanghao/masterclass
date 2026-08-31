<p>Table: <code>cities</code></p>

<pre>
+-------------+---------+
| Column Name | Type    | 
+-------------+---------+
| state       | varchar |
| city        | varchar |
+-------------+---------+
(state, city) is the combination of columns with unique values for this table.
Each row of this table contains the state name and the city name within that state.
</pre>

<p>Write a solution to find <strong>all the cities</strong> in <strong>each state</strong> and analyze them based on the following requirements:</p>

<ul>
	<li>Combine all cities into a <strong>comma-separated</strong> string for each state.</li>
	<li>Only include states that have <strong>at least</strong> <code>3</code> cities.</li>
	<li>Only include states where <strong>at least one city</strong> starts with the <strong>same letter as the state name</strong>.</li>
</ul>

<p>Return <em>the result table ordered by</em> <em>the count of matching-letter cities in <strong>descending</strong> order</em>&nbsp;<em>and then by state name in <strong>ascending</strong> order</em>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example:</strong></p>

<div class="example-block">
<p><strong>Input:</strong></p>

<p>cities table:</p>

<pre class="example-io">
+--------------+---------------+
| state        | city          |
+--------------+---------------+
| New York     | New York City |
| New York     | Newark        |
| New York     | Buffalo       |
| New York     | Rochester     |
| California   | San Francisco |
| California   | Sacramento    |
| California   | San Diego     |
| California   | Los Angeles   |
| Texas        | Tyler         |
| Texas        | Temple        |
| Texas        | Taylor        |
| Texas        | Dallas        |
| Pennsylvania | Philadelphia  |
| Pennsylvania | Pittsburgh    |
| Pennsylvania | Pottstown     |
+--------------+---------------+
</pre>

<p><strong>Output:</strong></p>

<pre class="example-io">
+-------------+-------------------------------------------+-----------------------+
| state       | cities                                    | matching_letter_count |
+-------------+-------------------------------------------+-----------------------+
| Pennsylvania| Philadelphia, Pittsburgh, Pottstown       | 3                     |
| Texas       | Dallas, Taylor, Temple, Tyler             | 3                     |
| New York    | Buffalo, Newark, New York City, Rochester | 2                     |
+-------------+-------------------------------------------+-----------------------+
</pre>

<p><strong>Explanation:</strong></p>

<ul>
	<li><strong>Pennsylvania</strong>:

	<ul>
		<li>Has 3 cities (meets minimum requirement)</li>
		<li>All 3 cities start with &#39;P&#39; (same as state)</li>
		<li>matching_letter_count = 3</li>
	</ul>
	</li>
	<li><strong>Texas</strong>:
	<ul>
		<li>Has 4 cities (meets minimum requirement)</li>
		<li>3 cities (Taylor, Temple, Tyler) start with &#39;T&#39; (same as state)</li>
		<li>matching_letter_count = 3</li>
	</ul>
	</li>
	<li><strong>New York</strong>:
	<ul>
		<li>Has 4 cities (meets minimum requirement)</li>
		<li>2 cities (Newark, New York City) start with &#39;N&#39; (same as state)</li>
		<li>matching_letter_count = 2</li>
	</ul>
	</li>
	<li><strong>California</strong> is not included in the output because:
	<ul>
		<li>Although it has 4 cities (meets minimum requirement)</li>
		<li>No cities start with &#39;C&#39; (doesn&#39;t meet the matching letter requirement)</li>
	</ul>
	</li>
</ul>

<p><strong>Note:</strong></p>

<ul>
	<li>Results are ordered by matching_letter_count in descending order</li>
	<li>When matching_letter_count is the same (Texas and New York both have 2), they are ordered by state name alphabetically</li>
	<li>Cities in each row are ordered alphabetically</li>
</ul>
</div>
