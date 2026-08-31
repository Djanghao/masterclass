# Go: DFS, 100% faster, Easy to Read Solution

**Author:** SwiftPush
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/1831377/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/1831377/)

---

This is a recursive solution
It attempts to keep track of how many children a node has, then uses that value to place itself in the results array. The base case is the node being `nil`, which is said to have -1 children. This then means that leaf nodes will have 0 children
If our results array isn't large enough, it appends a new empty array


* **O(n) time**
	* Each node is visited once
* **O(log n) space**
	* They'll be a function call from the root node, all the way down to the leaf nodes

```go
func findLeaves(root *TreeNode) [][]int {
	results := [][]int{}
	findLeavesHelper(&results, root)
	return results
}

func findLeavesHelper(results *[][]int, root *TreeNode) int {
	if root == nil {
		return -1
	}

	level := 1 + max(
		findLeavesHelper(results, root.Left),
		findLeavesHelper(results, root.Right),
	)

	if len(*results) <= level {
		(*results) = append((*results), []int{})
	}
	(*results)[level] = append((*results)[level], root.Val)

	return level
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

```