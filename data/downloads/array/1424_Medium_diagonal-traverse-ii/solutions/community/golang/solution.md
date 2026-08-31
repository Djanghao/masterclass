# DFS solution

**Author:** TranQuocToan1996
**Votes:** 2
**Link:** [https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315588/](https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315588/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type findDiagonalOrderDFS struct {
	x, y int
}

func findDiagonalOrder(nums [][]int) []int {
	const cap = 1 << 13
	res := make([]int, 0, cap)
	queue := []findDiagonalOrderDFS{{0, 0}}
	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]
		if node.x >= len(nums) || node.y >= len(nums[node.x]) {
			continue
		}
		res = append(res, nums[node.x][node.y])
		if node.y == 0 {
			queue = append(queue, findDiagonalOrderDFS{node.x + 1, node.y})
		}
		queue = append(queue, findDiagonalOrderDFS{node.x, node.y + 1})
	}

	return res
}
```