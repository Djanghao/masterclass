# Go clean solution - O(h) | O(1)

**Author:** klakovskiy
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solutions/3799381/](https://leetcode.com/problems/closest-binary-search-tree-value/solutions/3799381/)

---


# Complexity
- Time complexity: O(H)
- Space complexity: O(1)

# Code
```
func closestValue(root *TreeNode, target float64) int {
	closest := root.Val
	for root != nil {
		if diff(root.Val, target) < diff(closest, target) {
			closest = root.Val
		} else if diff(root.Val, target) == diff(closest, target) {
			closest = min(root.Val, closest)
		}

		if target > float64(root.Val) {
			root = root.Right
		} else {
			root = root.Left
		}
	}
	return closest
}

func diff(val int, target float64) float64 {
	if target > float64(val) {
		return target - float64(val)
	}
	return float64(val) - target
}

func min(i, j int) int {
	if i < j {
		return i
	}
	return j
}

```