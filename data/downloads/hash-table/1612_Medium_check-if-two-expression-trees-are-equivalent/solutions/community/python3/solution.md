# use two hash maps and check if they are equal or not

**Author:** owenwu4
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/solutions/5952900/](https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/solutions/5952900/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
# Definition for a binary tree node.
# class Node(object):
#     def __init__(self, val=" ", left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def checkEquivalence(self, root1: 'Node', root2: 'Node') -> bool:
        self.first = dict()
        def f(root1):
            if not root1:
                return None
            if root1.val not in self.first:
                self.first[root1.val] = 0
            self.first[root1.val] += 1
            l = f(root1.left)
            r = f(root1.right)
        f(root1)
        print(self.first)
        self.second = dict()
        def f(root2):
            if not root2:
                return None
            if root2.val not in self.second:
                self.second[root2.val] = 0
            self.second[root2.val] += 1
            l = f(root2.left)
            r = f(root2.right)
        f(root2)
        print(self.second)
        return self.first == self.second
```