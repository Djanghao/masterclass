# Golang HashMap Solution, Very Simple

**Author:** KunBetter
**Votes:** 1
**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/293181/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/293181/)

---

```golang
func recoverFromPreorder(S string) *TreeNode {
    sLen := len(S)
	if sLen <= 0 {
		return nil
	}

	var root *TreeNode

	idxLevelMap := make(map[int]*TreeNode)

	i := 0
	numStart := 0
	numEnd := 0
	depth := 0

	for i <= sLen {
		if i == sLen || S[i] == '-' {
			if numEnd > numStart {
				num, _ := strconv.Atoi(S[numStart:numEnd])
				if depth <= 0 {
					root = &TreeNode{
						Val:   num,
						Left:  nil,
						Right: nil,
					}
					idxLevelMap[depth] = root
				} else {
					fatherTreeNode, _ := idxLevelMap[depth-1]
					treeNode := &TreeNode{
						Val:   num,
						Left:  nil,
						Right: nil,
					}
					if fatherTreeNode.Left == nil {
						fatherTreeNode.Left = treeNode
					} else {
						fatherTreeNode.Right = treeNode
					}
					idxLevelMap[depth] = treeNode
				}
				depth = 0
			}
			depth++
			numStart = i + 1
			numEnd = i + 1
		} else {
			numEnd++
		}

		i++
	}

	return root
}
```