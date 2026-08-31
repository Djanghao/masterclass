# ✅Using Anonymous as Recursive. Modern, Simple Solution✅

**Author:** husanmusa
**Votes:** 4
**Link:** [https://leetcode.com/problems/range-sum-of-bst/solutions/5000800/](https://leetcode.com/problems/range-sum-of-bst/solutions/5000800/)

---

If you have question, pls, write below. I will answer.
# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func rangeSumBST(root *TreeNode, low int, high int) int {
	sum := 0
	var recur func(root *TreeNode)

	recur = func(root *TreeNode) {
		if root.Val >= low && root.Val <= high {
			sum += root.Val
		}
		if root.Left != nil {
			recur(root.Left)
		}
		if root.Right != nil {
			recur(root.Right)
		}
	}
	recur(root)

	return sum
}

```