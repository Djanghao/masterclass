# 331: Time 98%, Solution with step by step explanation

**Author:** Marlen09
**Votes:** 16
**Link:** [https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/3244705/](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/3244705/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
an explicit stack, and instead just uses a single variable degree to keep track of the outDegree (children) - inDegree (parent). It also removes the need for the stack and nodes lists used in the previous solution, which results in less memory usage and faster execution time.

The time complexity of this solution is O(n), where n is the number of nodes in the binary tree. The space complexity is O(1), as we are only using a single variable to keep track of the degree.

# Complexity
- Time complexity:
98%

- Space complexity:
75.32%

# Code
```
class Solution:
    def isValidSerialization(self, preorder: str) -> bool:
        # Initialize the outDegree (children) - inDegree (parent) to 1
        degree = 1
        
        # Iterate through the nodes in the preorder traversal
        for node in preorder.split(','):
            degree -= 1 # Decrement the degree by 1 for each node
            
            if degree < 0: # If the degree is negative, return False
                return False
            
            if node != '#': # If the node is not a leaf node
                degree += 2 # Increment the degree by 2 for each non-leaf node
            
        # If the final degree is 0, the tree is valid, else invalid
        return degree == 0

```