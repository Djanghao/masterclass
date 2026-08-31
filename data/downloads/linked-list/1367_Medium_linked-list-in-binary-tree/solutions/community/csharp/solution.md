# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 7
**Link:** [https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5750056/](https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5750056/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/linked-list-in-binary-tree/submissions/1381879065?envType=daily-question&envId=2024-09-07
- ***C++ Code -->*** https://leetcode.com/problems/linked-list-in-binary-tree/submissions/1381776449?envType=daily-question&envId=2024-09-07
- ***Python3 Code -->*** https://leetcode.com/problems/linked-list-in-binary-tree/submissions/1381808884?envType=daily-question&envId=2024-09-07
- ***Java Code -->*** https://leetcode.com/problems/linked-list-in-binary-tree/submissions/1381786163?envType=daily-question&envId=2024-09-07
- ***C Code -->*** https://leetcode.com/problems/linked-list-in-binary-tree/submissions/1381810925?envType=daily-question&envId=2024-09-07
- ***Python Code -->*** https://leetcode.com/problems/linked-list-in-binary-tree/submissions/1381790888?envType=daily-question&envId=2024-09-07
- ***C# Code -->*** https://leetcode.com/problems/linked-list-in-binary-tree/submissions/1381876323?envType=daily-question&envId=2024-09-07
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(M * N) //M - No of Nodes in Linked List , N - No of Nodes in TreeNode
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)
# Code
```python []
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isSubPath(self, head, root):
        """
        :type head: ListNode
        :type root: TreeNode
        :rtype: bool
        """
        def isConSubPath(head, root):
            if not head:
                return True
            if not root:
                return False
            return head.val == root.val and (isConSubPath(head.next, root.left) or (isConSubPath(head.next, root.right)))

        if not root:
            return False
        return isConSubPath(head, root) or self.isSubPath(head, root.left) or self.isSubPath(head, root.right)
```
![th.jpeg](./images/1.jpeg)
