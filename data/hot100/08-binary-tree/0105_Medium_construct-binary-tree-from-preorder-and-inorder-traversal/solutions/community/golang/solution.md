# Simple Go solution using recursion

**Author:** evleria
**Votes:** 10
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/1259453/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/1259453/)

---

[Github link](https://github.com/evleria/leetcode-in-go/blob/main/problems/0105-construct-binary-tree-from-preorder-and-inorder-traversal/build_tree.go)
Similar to [problem #106](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/discuss/1597722/Simple-Go-solution-using-recursion) 
```
func buildTree(preorder []int, inorder []int) *TreeNode {
	if len(preorder) == 0 {
		return nil
	}

	idx := indexOf(inorder, preorder[0])
	return &TreeNode{
		Val:   preorder[0],
		Left:  buildTree(preorder[1:idx+1], inorder[:idx]),
		Right: buildTree(preorder[idx+1:], inorder[idx+1:]),
	}
}

func indexOf(nums []int, target int) int {
	for i, num := range nums {
		if num == target {
			return i
		}
	}
	return -1
}
```