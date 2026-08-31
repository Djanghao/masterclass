# Python stack solution beats 100% on runtime and memory

**Author:** cenkay
**Votes:** 251
**Link:** [https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/252722/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/252722/)

---

* Idea is simple.
* First item in preorder list is the root to be considered.
* For next item in preorder list, there are 2 cases to consider:
	* If value is less than last item in stack, it is the left child of last item.
	* If value is greater than last item in stack, pop it.
		* The last popped item will be the parent and the item will be the right child of the parent.
```
class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> TreeNode:
        root = TreeNode(preorder[0])
        stack = [root]
        for value in preorder[1:]:
            if value < stack[-1].val:
                stack[-1].left = TreeNode(value)
                stack.append(stack[-1].left)
            else:
                while stack and stack[-1].val < value:
                    last = stack.pop()
                last.right = TreeNode(value)
                stack.append(last.right)
        return root
```