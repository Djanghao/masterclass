# Python, DFS

**Author:** warmr0bot
**Votes:** 20
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/1153004/](https://leetcode.com/problems/deepest-leaves-sum/solutions/1153004/)

---

# Idea
Do the DFS keeping track of the current depth level. If its deeper than the deepest level seen before \u2013 reset the sum, if equal add to it.
```
def deepestLeavesSum(self, root: TreeNode) -> int:
	maxlevel = 0
	tsum = 0

	def dfs(node=root, level=0):
		nonlocal maxlevel, tsum
		if not node: return
		dfs(node.left, level+1)
		dfs(node.right, level+1)
		if maxlevel < level:
			maxlevel = level
			tsum = 0
		if maxlevel == level:
			tsum += node.val

	dfs()
	return tsum
```