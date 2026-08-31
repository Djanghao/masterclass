<p>Given an array of integers <code><font face="monospace">nums</font></code>, you can perform <em>any</em> number of operations on this array.</p>

<p>In each <strong>operation</strong>, you can:</p>

<ul>
	<li>Choose a <strong>prefix</strong> of the array.</li>
	<li>Choose an integer <code><font face="monospace">k</font></code><font face="monospace"> </font>(which can be negative) and add <code><font face="monospace">k</font></code> to each element in the chosen prefix.</li>
</ul>

<p>A <strong>prefix</strong> of an array is a subarray that starts from the beginning of the array and extends to any point within it.</p>

<p>Return the <strong>minimum</strong> number of operations required to make all elements in <code>arr</code> equal.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,4,2]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li><strong>Operation 1</strong>: Choose the prefix <code>[1, 4]</code> of length 2 and add -2 to each element of the prefix. The array becomes <code>[-1, 2, 2]</code>.</li>
	<li><strong>Operation 2</strong>: Choose the prefix <code>[-1]</code> of length 1 and add 3 to it. The array becomes <code>[2, 2, 2]</code>.</li>
	<li>Thus, the minimum number of required operations is 2.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [10,10,10]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>All elements are already equal, so no operations are needed.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>
