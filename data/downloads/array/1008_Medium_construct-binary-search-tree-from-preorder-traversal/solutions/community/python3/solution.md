# Python 3, Recursive, Easy to understand

**Author:** timzeng
**Votes:** 84
**Link:** [https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/588589/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/588589/)

---

```
class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> TreeNode:
        if not preorder:
            return None
        root = TreeNode(preorder[0])
        i = 1
        while i<len(preorder) and  preorder[i] < root.val:
            i+=1
        root.left = self.bstFromPreorder(preorder[1:i])
        root.right = self.bstFromPreorder(preorder[i:])
        return root
```

Work through with example `preorder = [8,5,1,7,10,12]`
- root = preorder[0] = 8
- root.left = [5,1,7]
	- root.left = 5
	- root.left.left = [1]
		- root.left.left = 1
	- root.left.right = [7]
		- root.left.right = 7
- root.right = [10,12]
	- root.right = 10
	- root.right.left = None
	- root.right.right = [12]
		- root.right.right = 12


***
Check on my [repo](https://github.com/zengtian006/LeetCode) to get Leetcode solution(Python) with classification: https://github.com/zengtian006/LeetCode
***

