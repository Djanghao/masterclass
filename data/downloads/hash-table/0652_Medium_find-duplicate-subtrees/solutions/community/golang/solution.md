# Go 12ms 100% map solution

**Author:** tjucoder
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-duplicate-subtrees/solutions/843401/](https://leetcode.com/problems/find-duplicate-subtrees/solutions/843401/)

---

```go
func findDuplicateSubtrees(root *TreeNode) []*TreeNode {
	hashAll := map[string]int{}
	duplicate := []*TreeNode{}
	dfs(root, hashAll, &duplicate)
	return duplicate
}

func dfs(node *TreeNode, hashAll map[string]int, duplicate *[]*TreeNode) string {
	if node == nil {
		return "nil"
	}
    lString := dfs(node.Left, hashAll, duplicate)
    rString := dfs(node.Right, hashAll, duplicate)
    buildString := fmt.Sprintf("(%s)(%v)(%s)", lString, node.Val, rString)
	hashAll[buildString]++
	if hashAll[buildString] == 2 {
		*duplicate = append(*duplicate, node)
	}
    return buildString
}
```