# Straightforward Solution: Intuition and Step-by-Step Explanation

**Author:** alprose11
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/5971906/](https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/5971906/)

---

# Intuition
 The intuition here is straightforward and follows the requirements in the question.
 Let's go over it step-by-step:
1. Build a tree where each node has an integer value (from 0 to n-1) and a byte (character) value.
2. Use backtracking to find the nearest ancestor and update the `parent` array accordingly.
3. Build a new tree using this updated `parent` array.
4. Calculate the size of each subtree and store the results.

# Edge Cases to Keep in Mind
 - This is a general tree, not a binary tree, so a node can have multiple children.
 - For duplicate characters in the tree, the nearest ancestor must be used as the parent, requiring careful handling of the `parent` array.


# Tree structure:
```
type Tree struct {
	Value    byte   // Represents the ith character of string `s`
	Node     int    // Represents node index `i`
	Children []*Tree
}
```

# Approach

 1. `buildTree` function :
    - Initialize `n` nodes with default values and store them in an array `nodes`.
    - As per the given `parent` array, where `parent[i]` is the parent of node `i`, add each child node to its parent node. 
     All nodes are already initialized, so linking is straightforward.

 2. `dfs` function (backtracking):
    - Perform a depth-first search (DFS) while keeping track of each character's most recent node using a map (`hash`).
      This map helps identify the nearest ancestor as we traverse the tree.
    - During the traversal, if a character reappears, it means an ancestor exists for the current node.
      Update the `parent` array, setting the current node\u2019s parent to this ancestor node\u2019s value.
    - After visiting all children nodes, backtrack:
        - Case 1: If there\u2019s a single ancestor, simply remove it from the map.
        - Case 2: If there are multiple ancestors, remove only the most recent occurrence and update the ancestor 
          with the node value of the next nearest ancestor.

 3. `getSubTSize` function:
    - This is a recursive function that calculates the total number of nodes in each node's subtree, including the node itself.


# Code
```golang []
type Tree struct {
	Value    byte
	Node     int
	Children []*Tree
}

func findSubtreeSizes(parent []int, s string) []int {
	root := buildTree(parent, s)

	hash := make(map[byte]int)
	dfs(root, hash, parent)

	res := make([]int, len(parent))
	root2 := buildTree(parent, s)

	getSubTSize(root2, res)
	return res
}

func dfs(root *Tree, hash map[byte]int, parent []int) {
	if root == nil {
		return
	}
	tmp, exist := hash[root.Value]
	hash[root.Value] = root.Node
	for _, child := range root.Children {
		dfs(child, hash, parent)
	}
	if exist {
		parent[root.Node] = tmp
		hash[root.Value] = tmp
	} else {
		delete(hash, root.Value)
	}
}

func getSubTSize(root *Tree, res []int) int {
	if root == nil {
		return 0
	}
	ans := 1
	for _, child := range root.Children {
		ans += getSubTSize(child, res)
	}
	res[root.Node] = ans
	return ans
}

func buildTree(parent []int, s string) *Tree {
	n := len(parent)
	nodes := make([]*Tree, n)

	for i := 0; i < n; i++ {
		nodes[i] = &Tree{
			Value: s[i],
			Node:  i,
		}
	}

	root := nodes[0]
	for i := 1; i < n; i++ {
		parentNode := nodes[parent[i]]
		parentNode.Children = append(parentNode.Children, nodes[i])
	}

	return root
}
```