# [Python] Simple inorder recursion solution with O(n) Time O(k) Space

**Author:** licpotis
**Votes:** 9
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/1547788/](https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/1547788/)

---

Time: O(n), Space: O(k)

Do an inorder traversing to a BST, we will encounter values from small to large, like SSSSSSSTLLLLLLL, where T is the closest num to the target, and S is smaller than T, and the L is larger than T.

We know the result should be some ...SSSTLLL... with the length of k. If we move a queue with a max length of k and slide it from left to right, the sliding can be stopped and the answer was found when it meets an L and (L - target) > (target - S), where S is the smallest number on the top of the queue. Here is my code:

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def closestKValues(self, root: Optional[TreeNode], target: float, k: int) -> List[int]:
        queue = collections.deque()
        def dfs(node):
            if node:
                dfs(node.left)
                if len(queue) == k:
                    if node.val - target > target - queue[0]:
                        return
                    queue.popleft()
                queue.append(node.val)
                dfs(node.right)
        dfs(root)
        return list(queue)
```