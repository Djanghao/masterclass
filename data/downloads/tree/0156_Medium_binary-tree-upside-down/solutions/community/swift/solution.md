# Recursive Swift solution with explanation

**Author:** spacepyro
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-upside-down/solutions/2265846/](https://leetcode.com/problems/binary-tree-upside-down/solutions/2265846/)

---

The idea behind this strategy is consider the overall goal of flipping the tree. In the diagrams, notice that flipping the tree requires us to find the furthest left node in the tree. In this case, we can consider using recursion to discover the furthest left node, similar to how we would approach a BFS.

Once we find the bottom node, we need to figure out how we can "flip" the relationships. As stated in the problem description:
- The new parent's left node is the old parent's right (i.e. `lhs.left`  \u2192 `root.right`)
- The new parent's right node is the old parent itself (i.e. `lhs.right` \u2192 `root`)

For a visual cue, consider the following diagram. We simply need to remove existing edges from the old parent and create new ones for the new parent. The '`x`'s depict the edges we want to remove, and the '`-->`'s depict the new edges we will create:
```swift        

              1               1
             / \\             / x
            2   3   ==>     2-->3
           / \\             / x
          4   5           4-->5
```

But what about the old parent? They will be configured once we recurse back up the stack. Because we can't infer from the new parent's point of view what the old parent's nodes will be, we set them to `nil` and let the next stack solve this for us.

```swift
func upsideDownBinaryTree(_ root: TreeNode?) -> TreeNode? {
	guard let root = root, let lhs = root.left else { 
		// There is no left child (or root is nil). Just return root.
		return root
	}

	// Recursively find the bottom-left child.
	let updatedRoot = upsideDownBinaryTree(lhs) 

	// We are now at the bottom-left part of the tree.
	// Using the rules above:
	lhs.left = root.right
	lhs.right = root

	// This node will possibly be configured later down the line in the recursion.
	root.left = nil
	root.right = nil

	return updatedRoot
}
```

Space complexity: O(1) since we are not constructing a new tree.
Time complexity: O(h), where `h` is the height of the tree.