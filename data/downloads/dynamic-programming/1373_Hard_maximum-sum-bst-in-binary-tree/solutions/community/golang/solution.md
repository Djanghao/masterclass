# go simple postorder traversal

**Author:** xyx530538772
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/2613639/](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/2613639/)

---

```go

var res int

func maxInt(i, j int) int {
	if i > j {
		return i
	}
	return j
}
func minInt(i, j int) int {
	if i > j {
		return j
	}
	return i
}

func sumBST(root *TreeNode) (int, int, int) {
	if root == nil {
		return math.MaxInt64, math.MinInt64, 0
	}
	leftMin, leftMax, leftSum := sumBST(root.Left)
	rightMin, rightMax, rightSum := sumBST(root.Right)
	sum := leftSum + rightSum + root.Val
	if root.Val > leftMax && root.Val < rightMin {
		//  is BST, update the result
		res = maxInt(res, sum)
		return minInt(root.Val, leftMin), maxInt(root.Val, rightMax), sum
	}
	// not BST
	return math.MinInt64, math.MaxInt64, 0
}

func maxSumBST(root *TreeNode) int {
	res = 0
	sumBST(root)
	return res
}
```