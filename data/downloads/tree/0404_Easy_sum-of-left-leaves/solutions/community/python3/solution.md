# Python iterative solution, beats 100%

**Author:** FooBarFooBarFooBar
**Votes:** 41
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/292953/](https://leetcode.com/problems/sum-of-left-leaves/solutions/292953/)

---

For those who were also confused if root node with no leaves count as left leaf - it is not.
Just go through all the elements using DFS with stack and remember if it is left or right child.

```
class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        result = 0
        stack = [(root, False)]
        while stack:
            curr, is_left = stack.pop()
            if not curr:
                continue
            if not curr.left and not curr.right:
                if is_left:
                    result += curr.val
            else:
                stack.append((curr.left, True))
                stack.append((curr.right, False))
        return result
```