<p>Given the root of a binary tree <code>root</code> where each node has a value, return the level of the tree that has the <strong>minimum</strong> sum of values among all the levels (in case of a tie, return the <strong>lowest</strong> level).</p>

<p><strong>Note</strong> that the root of the tree is at level 1 and the level of any other node is its distance from the root + 1.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">root = [50,6,2,30,80,7]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/05/17/image_2024-05-17_16-15-46.png" style="padding: 10px; background: rgb(255, 255, 255); border-radius: 0.5rem; width: 265px; height: 129px;" /></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">root = [36,17,10,null,null,24]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/05/17/image_2024-05-17_16-14-18.png" style="padding: 10px; background: rgb(255, 255, 255); border-radius: 0.5rem; width: 170px; height: 135px;" /></p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">root = [5,null,5,null,5]</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/05/19/image_2024-05-19_19-07-20.png" style="padding: 10px; background: rgb(255, 255, 255); border-radius: 0.5rem; width: 170px; height: 135px;" /></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>5</sup>]</code>.</li>
	<li><code>1 &lt;= Node.val &lt;= 10<sup>9</sup></code></li>
</ul>
