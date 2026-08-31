# Use a simple tree, and dfs

**Author:** user1069m
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-tree-nodes/solutions/5091003/](https://leetcode.com/problems/delete-tree-nodes/solutions/5091003/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use tree to calculate the sum efficiently
# Approach
<!-- Describe your approach to solving the problem. -->
First build a simple time, as we can see from code.
Second travase the tree to the get the sum and number of nodes  for each sub-tree.
The trick is when the sum of sub tree is 0, change the number of nodes into 0.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func deleteTreeNodes(nodes int, parent []int, value []int) int {
	tree := make(map[int][]int)

	//build tree
	for i := 1; i < nodes; i++ {
		tree[parent[i]] = append(tree[parent[i]], i)
	}

	var traverse func(index int) (int, int)

	traverse = func(index int) (int, int) {
		sum := value[index]
		count := 1
		subtree, ok := tree[index]
		if ok {
			for _, sub := range subtree {
				subSum, subCount := traverse(sub)
				sum += subSum
				count += subCount
			}
		}
		if sum == 0 {
			count = 0
		}
		return sum, count
	}

	//traverse the tree, and calculate the sum of every sub tree
	_, cnt := traverse(0)

	return cnt
}
```