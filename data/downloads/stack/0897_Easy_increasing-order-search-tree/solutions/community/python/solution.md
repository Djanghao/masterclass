# 100% faster- Easy Python Iterative solution without the dummy tree node

**Author:** sra1007
**Votes:** 44
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/314557/](https://leetcode.com/problems/increasing-order-search-tree/solutions/314557/)

---

```
# Keep going to the left of the tree by appending the nodes to the stack and once you reach the 
# leaf, then pop the stack and make the first popped node as root and then for rest of the nodes, 
# append it to the right of the current root and make the left for each node as None 
class Solution(object):
    def increasingBST(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        if not root:
            return None
        stack = []
        temp = x = root
        i = 0
        while stack or temp:
            if temp:
                stack.append(temp)
                temp = temp.left
            else:
                node = stack.pop()
                if i==0:
                    root = x = node
                    i+=1
                else:
                    x.right = node
                    x = node
                    x.left = None
                temp = node.right
        return root	
		
# If you like the solution, upvote it and do suggest if you have a better solution!!
```