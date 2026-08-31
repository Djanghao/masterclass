# Clean go solution | beats 100% (runtime and memory)

**Author:** klakovskiy
**Votes:** 1
**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/3862131/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/3862131/)

---


# Code
```
func copyRandomBinaryTree(root *Node) *NodeCopy {
	hash := make(map[*Node]*NodeCopy)
	
    var clone func(node *Node) *NodeCopy
	clone = func(node *Node) *NodeCopy {
		if node == nil {
			return nil
		}
		if cloneNode, ok := hash[node]; ok {
			return cloneNode
		}
		cloneNode := &NodeCopy{Val: node.Val}
		hash[node] = cloneNode
		cloneNode.Left = clone(node.Left)
		cloneNode.Right = clone(node.Right)
		cloneNode.Random = clone(node.Random)
		return cloneNode
	}

	return clone(root)
}
```