# golang DFS beats 100%, 100%

**Author:** frankegoesdown
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-bst-subtree/solutions/1042657/](https://leetcode.com/problems/largest-bst-subtree/solutions/1042657/)

---

```
func largestBSTSubtree(root *TreeNode) (ans int) {
	if root==nil{
		return
	}
	dfs(root, &ans)
	return
}

func dfs(node *TreeNode, ans *int) (int, int, int) {
	if node==nil{
		return 0, math.MaxInt32, math.MinInt32
	}

	leftSize, leftLower, leftUpper:= dfs(node.Left, ans)
	rightSize, rightLower, rightUpper:= dfs(node.Right, ans)

	if leftSize==-1 || rightSize==-1 || node.Val <= leftUpper || node.Val >= rightLower{
		return -1, 0, 0
	}

	size:= leftSize+rightSize+1

	*ans = max(*ans, size)

	return size, min(leftLower, node.Val), max(rightUpper, node.Val)

}


func min(i, j int) int{
	if i< j{
		return i
	}

	return j
}

func max(i, j int) int{
	if i> j{
		return i
	}

	return j
}
```