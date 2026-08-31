<p>There are <code>n</code> windows open numbered from <code>1</code> to <code>n</code>, we want to simulate using alt + tab to navigate between the windows.</p>

<p>You are given an array <code>windows</code> which contains the initial order of the windows (the first element is at the top and the last one is at the bottom).</p>

<p>You are also given an array <code>queries</code> where for each query, the window <code>queries[i]</code> is brought to the top.</p>

<p>Return the final state of the array <code>windows</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">windows = [1,2,3], queries = [3,3,2]</span></p>

<p><strong>Output:</strong> <span class="example-io">[2,3,1]</span></p>

<p><strong>Explanation:</strong></p>

<p>Here is the window array after each query:</p>

<ul>
	<li>Initial order: <code>[1,2,3]</code></li>
	<li>After the first query: <code>[<u><strong>3</strong></u>,1,2]</code></li>
	<li>After the second query: <code>[<u><strong>3</strong></u>,1,2]</code></li>
	<li>After the last query: <code>[<u><strong>2</strong></u>,3,1]</code></li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">windows = [1,4,2,3], queries = [4,1,3]</span></p>

<p><strong>Output:</strong> <span class="example-io">[3,1,4,2]</span></p>

<p><strong>Explanation:</strong></p>

<p>Here is the window array after each query:</p>

<ul>
	<li>Initial order: <code>[1,4,2,3]</code></li>
	<li>After the first query: <code>[<u><strong>4</strong></u>,1,2,3]</code></li>
	<li>After the second query: <code>[<u><strong>1</strong></u>,4,2,3]</code></li>
	<li>After the last query: <code>[<u><strong>3</strong></u>,1,4,2]</code></li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n == windows.length &lt;= 10<sup>5</sup></code></li>
	<li><code>windows</code> is a permutation of <code>[1, n]</code>.</li>
	<li><code>1 &lt;= queries.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= queries[i] &lt;= n</code></li>
</ul>
