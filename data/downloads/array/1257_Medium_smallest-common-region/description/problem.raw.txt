<p>You are given some lists of <code>regions</code> where the first region of each list <strong>directly</strong> contains all other regions in that list.</p>

<p>If a region <code>x</code> contains a region <code>y</code> <em>directly</em>, and region <code>y</code> contains region <code>z</code> <em>directly</em>, then region <code>x</code> is said to contain region <code>z</code> <strong>indirectly</strong>. Note that region <code>x</code> also <strong>indirectly</strong> contains all regions <strong>indirectly</strong> containd in <code>y</code>.</p>

<p>Naturally, if a region <code>x</code> contains (either <em>directly</em> or <em>indirectly</em>) another region <code>y</code>, then <code>x</code> is bigger than or equal to <code>y</code> in size. Also, by definition, a region <code>x</code> contains itself.</p>

<p>Given two regions: <code>region1</code> and <code>region2</code>, return <em>the smallest region that contains both of them</em>.</p>

<p>It is guaranteed the smallest region exists.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:
</strong>regions = [[&quot;Earth&quot;,&quot;North America&quot;,&quot;South America&quot;],
[&quot;North America&quot;,&quot;United States&quot;,&quot;Canada&quot;],
[&quot;United States&quot;,&quot;New York&quot;,&quot;Boston&quot;],
[&quot;Canada&quot;,&quot;Ontario&quot;,&quot;Quebec&quot;],
[&quot;South America&quot;,&quot;Brazil&quot;]],
region1 = &quot;Quebec&quot;,
region2 = &quot;New York&quot;
<strong>Output:</strong> &quot;North America&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> regions = [[&quot;Earth&quot;, &quot;North America&quot;, &quot;South America&quot;],[&quot;North America&quot;, &quot;United States&quot;, &quot;Canada&quot;],[&quot;United States&quot;, &quot;New York&quot;, &quot;Boston&quot;],[&quot;Canada&quot;, &quot;Ontario&quot;, &quot;Quebec&quot;],[&quot;South America&quot;, &quot;Brazil&quot;]], region1 = &quot;Canada&quot;, region2 = &quot;South America&quot;
<strong>Output:</strong> &quot;Earth&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= regions.length &lt;= 10<sup>4</sup></code></li>
	<li><code>2 &lt;= regions[i].length &lt;= 20</code></li>
	<li><code>1 &lt;= regions[i][j].length, region1.length, region2.length &lt;= 20</code></li>
	<li><code>region1 != region2</code></li>
	<li><code>regions[i][j]</code>, <code>region1</code>, and <code>region2</code> consist of English letters.</li>
	<li>The input is generated such that there exists a region which contains all the other regions, either directly or indirectly.</li>
	<li>A region cannot be directly contained in more than one region.</li>
</ul>
