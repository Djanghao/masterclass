# constant space easy In-Order Traversal with explaination

**Author:** yasirysr47
**Votes:** 21
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/1671711/](https://leetcode.com/problems/recover-binary-search-tree/solutions/1671711/)

---

The space taken by the recursion call is not considered as a space complexity here.
The extra space is usually used to store the inorder traversal list. which is not used in this solution.

InOrder traversal for BST means the tree is traversed in sorted order, so if any node breaks the sorted order that wll be our node to swap.
that is the first and last node which breaks the sorting is our culprit !!

```
def recoverTree(self, root: Optional[TreeNode]) -> None:
       
        res = []     
        startnode = None
        prev = None
        lastnode = None
        
        def dfs(root):
            nonlocal res, startnode, prev, lastnode
            if not root:
                return 
            # go to left  (inorder step 1)  
            dfs(root.left)
			
            # do processing....(inorder step 2)
			# get the first node where the sorted order is broken the first time and the last time
            if prev and prev.val > root.val:
                if not startnode:
                    startnode = prev
                lastnode = root
                
            prev = root
			
            # go to right (inorder step 3)    
            dfs(root.right)
            
        
        dfs(root)
        # swap the nodes that are not in place
        if startnode and lastnode:
            startnode.val, lastnode.val = lastnode.val, startnode.val
```

***Please upvote for motivation***