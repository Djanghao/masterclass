# Go clean iterative + recursive

**Author:** artacone
**Votes:** 1
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5374531/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5374531/)

---

# Code
```go
func balanceBST(root *TreeNode) *TreeNode {
    sortedNodes := sortNodes(root)
    
    return createBalancedTree(sortedNodes)
}

func sortNodes(root *TreeNode) []*TreeNode {
    sorted := make([]*TreeNode, 0)
	stack := make([]*TreeNode, 0)
    node := root
    for len(stack) != 0 || node != nil {
        for node != nil {
            stack = append(stack, node)
            node = node.Left
        }
        node = stack[len(stack)-1]
        stack = stack[:len(stack)-1]
        sorted = append(sorted, node)
        node = node.Right
    }

    return sorted
}

func createBalancedTree(nodes []*TreeNode) *TreeNode {
	if len(nodes) < 1 {
		return nil
	}

	mid := len(nodes)/2
    root := nodes[mid]
	root.Left = createBalancedTree(nodes[:mid])
	root.Right = createBalancedTree(nodes[mid+1:])

	return root
}
```