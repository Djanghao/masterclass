# Construct Binary Tree from String  | Golang | Recursion

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-string/solutions/1110804/](https://leetcode.com/problems/construct-binary-tree-from-string/solutions/1110804/)

---

```
func str2tree(s string) *TreeNode {
	if s == "" {
		return nil
	}
	base := new(TreeNode)
	var strChildren string
	fmt.Sscanf(s, "%d%s", &base.Val, &strChildren)

	openParenCount := 0
	var strLeft, strRight string
	for index, ch := range strChildren {
		if ch == '(' {
			openParenCount++
		} else if ch == ')' {
			openParenCount--
			if openParenCount == 0 {
				strLeft = strChildren[1:index]
				if index < len(strChildren) - 1 {
					strRight = strChildren[index+2 : len(strChildren)-1]
				}
				break
			}
		}
	}
	
	if strLeft != "" {
		base.Left = str2tree(strLeft)
	}
	if strRight != "" {
		base.Right = str2tree(strRight)
	}
	return base
}
```