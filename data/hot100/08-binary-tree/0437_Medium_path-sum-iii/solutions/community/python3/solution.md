# [Python] One-pass DFS, faster than 99%

**Author:** u2agarwal99
**Votes:** 69
**Link:** [https://leetcode.com/problems/path-sum-iii/solutions/1526096/](https://leetcode.com/problems/path-sum-iii/solutions/1526096/)

---

Please feel free to give suggestions or ask questions. **Upvote** if you like the solution.
O(h) space if we delete zero-valued items from sums.

**Idea**: Maintain prefix sums while doing dfs from root to leaf. If currentSum-prefixSum=targetSum, then we've found a path that has a value of target. If we encountered prefixSum n times, then we've found n such paths.
```
def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:

	# prefix sums encountered in current path
	sums = defaultdict(int)
	sums[0] = 1

	def dfs(root, total):
		count = 0
		if root:
			total += root.val
			# Can remove sums[currSum-targetSum] prefixSums to get target
			count = sums[total-targetSum]

			# Add value of this prefixSum
			sums[total] += 1
			# Explore children
			count += dfs(root.left, total) + dfs(root.right, total)
			# Remove value of this prefixSum (path's been explored)
			sums[total] -= 1

		return count

	return dfs(root, 0)
```