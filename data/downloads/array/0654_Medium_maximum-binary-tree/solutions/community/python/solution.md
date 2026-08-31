# Python O(n) Solution with explanation

**Author:** tom0727
**Votes:** 38
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/316286/](https://leetcode.com/problems/maximum-binary-tree/solutions/316286/)

---

This is a solution using Monotone Stack, because this question basically says:
If there is a number ```i``` in the middle of ```nums```, find the biggest number on its left and right hand side, these 2 biggest numbers should be smaller than i. We call these two numbers ```left``` and ```right```.

If you know about Decreasing Stack, you will notice that:
1. When you are trying to push a number ```i```, during the process of popping elements from the stack, the last element you pop must be the ```left```  of ```i``` .
2. After the popping process, if there is still an element on the top of stack, this element, say ```top```, must be bigger than ```i```, thus ```i``` is a candidate of the ```right``` of ```top```. 
While ```i``` might not be the final ```right``` of ```top```, consider the example below:

Example:
```nums = [3,1,2]```, first we process ```3```, then we push ```1```, ```1```then becomes the candidate of ```right```, therefore we set ```node(3).right = node(1)```. But then we process ```2```, start the popping process, ```1``` is the last element we pop, so according to Rule1 above, ```node(2).left = node(1)```. Then we push ```2``` to the stack, now, ```node(3).right = node(2)```. We get the correct answer!

Code:
```
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def constructMaximumBinaryTree(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """
        if not nums:
            return None
        stack = []  #build a decreasing stack
        for i in nums:
            node = TreeNode(i)
            lastpop = None
            
            while stack and stack[-1].val < i:  #popping process
                lastpop = stack.pop()
            node.left = lastpop
            
            if stack:
                stack[-1].right = node
            stack.append(node)
            
        return stack[0]
