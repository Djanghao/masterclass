# Easy solution Go

**Author:** eduard1998n
**Votes:** 6
**Link:** [https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5034749/](https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5034749/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func smallestFromLeaf(root *TreeNode) string {

	ans := ""

	var dfs func(node *TreeNode, text string)

	dfs = func(node *TreeNode, text string) {

		if node == nil {
			return
		}
		text = string(rune(node.Val + 97))+text
		if node.Right == nil && node.Left == nil {
			if ans == "" || ans > text {
				ans = text
			}

			return
		}

		dfs(node.Left, text)
		dfs(node.Right, text)
	}

	dfs(root, "")

	return ans
}
```