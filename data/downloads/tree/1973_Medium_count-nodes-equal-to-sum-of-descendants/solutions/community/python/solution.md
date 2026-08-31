# Python - Recursive with memoization

**Author:** azhw1983
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/1664731/](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/1664731/)

---

```
def equalToDescendants(root):
    """
    :type root: Optional[TreeNode]
    :rtype: int
    """
    from functools import lru_cache
    @lru_cache(maxsize = None)
    def get_sum_des(node):
        # gives the sum of the node + its descendents - so if you want only sum of descendents you need to subtract the node.val itself - see *
        if not node:
            return 0
        else:
            return node.val + get_sum_des(node.right) + get_sum_des(node.left)

    cnt = 0
    stack = [root]
    while stack:
        node = stack.pop()
        if get_sum_des(node) - node.val == node.val: # <- see *
            cnt += 1
        if node.left:
            stack.append(node.left)
        if node.right:
            stack.append(node.right)
            
    return cnt
```