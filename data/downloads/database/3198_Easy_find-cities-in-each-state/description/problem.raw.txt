<p>Table: <code>cities</code></p>

<pre>
+-------------+---------+
| Column Name | Type    | 
+-------------+---------+
| state       | varchar |
| city        | varchar |
+-------------+---------+
(state, city) is the primary key (combination of columns with unique values) for this table.
Each row of this table contains the state name and the city name within that state.
</pre>

<p>Write a solution to find <strong>all the cities in each state</strong> and combine them into a <strong>single comma-separated</strong> string.</p>

<p>Return <em>the result table ordered by</em> <code>state</code>&nbsp;<em>and</em> <code>city</code>&nbsp;<em>in <strong>ascending</strong> order</em>.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example:</strong></p>

<div class="example-block">
<p><strong>Input:</strong></p>

<p>cities table:</p>

<pre class="example-io">
+-------------+---------------+
| state       | city          |
+-------------+---------------+
| California  | Los Angeles   |
| California  | San Francisco |
| California  | San Diego     |
| Texas       | Houston       |
| Texas       | Austin        |
| Texas       | Dallas        |
| New York    | New York City |
| New York    | Buffalo       |
| New York    | Rochester     |
+-------------+---------------+
</pre>

<p><strong>Output:</strong></p>

<pre class="example-io">
+-------------+---------------------------------------+
| state       | cities                                |
+-------------+---------------------------------------+
| California  | Los Angeles, San Diego, San Francisco |
| New York    | Buffalo, New York City, Rochester     |
| Texas       | Austin, Dallas, Houston               |
+-------------+---------------------------------------+
</pre>

<p><strong>Explanation:</strong></p>

<ul>
	<li><strong>California:</strong> All cities (&quot;Los Angeles&quot;, &quot;San Diego&quot;, &quot;San Francisco&quot;) are listed in a comma-separated string.</li>
	<li><strong>New York:</strong> All cities (&quot;Buffalo&quot;, &quot;New York City&quot;, &quot;Rochester&quot;) are listed in a comma-separated string.</li>
	<li><strong>Texas:</strong> All cities (&quot;Austin&quot;, &quot;Dallas&quot;, &quot;Houston&quot;) are listed in a comma-separated string.</li>
</ul>

<p><strong>Note:</strong> The output table is ordered by the state name in ascending order.</p>
</div>
