<p>Given an array <code>nums</code>, you have to get the <strong>maximum</strong> score starting from index 0 and <strong>hopping</strong> until you reach the last element of the array.</p>

<p>In each <strong>hop</strong>, you can jump from index <code>i</code> to an index <code>j &gt; i</code>, and you get a <strong>score</strong> of <code>(j - i) * nums[j]</code>.</p>

<p>Return the <em>maximum score</em> you can get.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,5,8]</span></p>

<p><strong>Output:</strong> <span class="example-io">16</span></p>

<p><strong>Explanation:</strong></p>

<p>There are two possible ways to reach the last element:</p>

<ul>
	<li><code>0 -&gt; 1 -&gt; 2</code> with a score of&nbsp;<code>(1 - 0) * 5 + (2 - 1) * 8 = 13</code>.</li>
	<li><code>0 -&gt; 2</code> with a score of&nbsp;<code>(2 - 0) * 8 =&nbsp;16</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [4,5,2,8,9,1,3]</span></p>

<p><strong>Output:</strong> <span class="example-io">42</span></p>

<p><strong>Explanation:</strong></p>

<p>We can do the hopping <code>0 -&gt; 4 -&gt; 6</code> with a score of&nbsp;<code>(4 - 0) * 9 + (6 - 4) * 3 = 42</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>3</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>
