# Go 100%+100% with post-order traversal

**Author:** mileslin
**Votes:** 0
**Link:** [https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/3946204/](https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/3946204/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

var maxDiameter int

func diameter(root *Node) int {
	maxDiameter = 0
	dfs(root)
	return maxDiameter - 1
}

func dfs(node *Node) int {
	if node == nil {
		return 0
	}
	maxLen, secLen := 0, 0
	for i := range node.Children {
		if l := dfs(node.Children[i]); l >= maxLen {
			maxLen, secLen = l, maxLen
		} else if l >= secLen {
			secLen = l
		}
	}

	maxDiameter = max(maxDiameter, maxLen+secLen+1)
	return maxLen + 1
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

```