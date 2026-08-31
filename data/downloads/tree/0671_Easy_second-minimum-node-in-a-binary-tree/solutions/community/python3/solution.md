# Python - 99% - 16ms - explnation - BFS

**Author:** hassansmallah
**Votes:** 12
**Link:** [https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/578849/](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/578849/)

---

1. get all the values 
2. if there's 1 unique value, return -1
3. else return 2nd smallest

cheers
```
class Solution:
    def findSecondMinimumValue(self, root: TreeNode) -> int:
        nums = []
        nodes = [root]
        while nodes:
            t = nodes.pop()
            nums.append(t.val)
            if t.left:
                nodes.append(t.left)
            if t.right:
                nodes.append(t.right)
        
        if len(set(nums)) == 1:
            return -1
        
        return sorted(set(nums))[1]
```