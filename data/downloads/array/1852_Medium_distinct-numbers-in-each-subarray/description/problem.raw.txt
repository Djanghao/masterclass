<p>You are given an integer array <code>nums</code> of length <code>n</code> and an integer <code>k</code>. Your task is to find the number of <strong>distinct</strong> elements in <strong>every</strong> subarray of size <code>k</code> within <code>nums</code>.</p>

<p>Return an array <code>ans</code> such that <code>ans[i]</code> is the count of distinct elements in <code>nums[i..(i + k - 1)]</code> for each index <code>0 &lt;= i &lt; n - k</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,2,2,1,3], k = 3
<strong>Output:</strong> [3,2,2,2,3]
<strong>Explanation: </strong>The number of distinct elements in each subarray goes as follows:
- nums[0..2] = [1,2,3] so ans[0] = 3
- nums[1..3] = [2,3,2] so ans[1] = 2
- nums[2..4] = [3,2,2] so ans[2] = 2
- nums[3..5] = [2,2,1] so ans[3] = 2
- nums[4..6] = [2,1,3] so ans[4] = 3
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,1,1,2,3,4], k = 4
<strong>Output:</strong> [1,2,3,4]
<strong>Explanation: </strong>The number of distinct elements in each subarray goes as follows:
- nums[0..3] = [1,1,1,1] so ans[0] = 1
- nums[1..4] = [1,1,1,2] so ans[1] = 2
- nums[2..5] = [1,1,2,3] so ans[2] = 3
- nums[3..6] = [1,2,3,4] so ans[3] = 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>
