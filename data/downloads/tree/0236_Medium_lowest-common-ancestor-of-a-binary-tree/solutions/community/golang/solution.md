# Go: Golang solution using recursion

**Author:** ychawla1
**Votes:** 8
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/3178718/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/3178718/)

---



# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
    // First base case, if root is null, return null
    if root == nil {
		return nil
	}

    // Second base case, if root is equal to p or q, return root because, we found the LCA at root only
	if root == p || root == q {
		return root
	}

    // Process left and then right nodes
	left := lowestCommonAncestor(root.Left, p, q)
	right := lowestCommonAncestor(root.Right, p, q)

    // if both left and right aren't null, that means we found the targets on both sides of trees, means we need to return root
	if left != nil && right != nil {
		return root
	}
	// if we find in left, return left
	if left != nil {
		return left
	}
    // else right
	return right
}
```