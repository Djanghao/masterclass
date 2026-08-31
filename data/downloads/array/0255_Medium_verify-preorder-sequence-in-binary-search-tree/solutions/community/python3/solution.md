# [Python] Algorithm Explained, O(N) and O(1) Solution

**Author:** 101leetcode
**Votes:** 11
**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/695322/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/695322/)

---

```
class Solution:
    def verifyPreorder(self, preorder: List[int]) -> bool:
        ## RC ##
        ## APPROACH : MONOTONOUS DECREASING STACK ##
        ## Similar to Leetcode: 94 Binary tree inorder traversal ##
        ## Similar to leetcode : 98 Validate Binary Search Tree #
        
        ## LOGIC ##
        ## 1. First we push all elements less than TOS (left childs)
        ## 2. If we encounter any big number than TOS, (indicates start of right childs), we pop all less elements and update lower value. In all such cases x should be more than its parent(lower) else we return False.
        ## 3. And append the big number to stack (right child) then (go for its left child & repeat process)
        
		## TIME COMPLEXITY : O(N) ##
		## SPACE COMPLEXITY : O(N) ##

        stack = []
        lower = -1 << 31
        for x in preorder:
            if x < lower:
                return False
            while stack and x > stack[-1]:
                lower = stack.pop()
            stack.append(x)
        return True
        
        # Then we realize that the preorder array can be reused as the stack thus achieve O(1) extra space, since the scanned items of preorder array is always more than or equal to the length of the stack.
        
        ## STACK TRACE ##
        ## [5,2,1,3,6] ##
        # [5, 2, 1, 3, 6]
        # [5, 2, 1, 3, 6]
        # [5, 2, 1, 3, 6]
        # [5, 3, 1, 3, 6]
        # [6, 3, 1, 3, 6]

		## TIME COMPLEXITY : O(N) ##
		## SPACE COMPLEXITY : O(1) ##

        lower = -1 << 31
        i = 0
        for x in preorder:
            if x < lower:
                return False
            while i > 0 and x > preorder[i - 1]:
                lower = preorder[i - 1]
                i -= 1
            preorder[i] = x
            i += 1
            # print(preorder)
        return True
        
```