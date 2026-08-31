# Easy Python Solution - Beats 89.7%

**Author:** Stuti_Adarsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/4918181/](https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/4918181/)

---

# Intuition
Its a recursive top down DFS traversal approach. 

# Approach
Edge case: 
1. We check if it's there's no root then return none or nothing
2. Check if current root/node is leaf node, if yes then add node value to res string variable by concatenating.

Recursive Case:
1. Traverse root.left - until leaf node is reached
2. Traverse root.right - until leaf node is reached meeting the edge case to stop recursion

Then have the value of res string added to output for each root node during traversal. Return the k-1th character of the output string.

# Complexity
- Time complexity:
DFS Traversal: The function performs a Depth-First Search (DFS) traversal of the rope tree to collect all characters in the rope.
The time complexity of DFS traversal is O(n), where n is the number of nodes in the rope tree.
String Concatenation: As each character is concatenated to the output string, the overall time complexity becomes O(n + k), where k is the index of the character to be retrieved.
Since string concatenation in Python has a complexity of O(n), and we do it k times, it becomes O(k).
Overall Time Complexity: O(n + k).

- Space complexity:
Output String: The space complexity of the output string is O(n), where n is the total number of characters in the rope tree.
Recursive Calls: The space complexity is determined by the depth of the recursion stack, which can be at most the height of the rope tree.
Overall Space Complexity: O(n).

# Code
```
# Definition for a rope tree node.
# class RopeTreeNode(object):
#     def __init__(self, len=0, val="", left=None, right=None):
#         self.len = len
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def getKthCharacter(self, root, k):
        """
        :type root: Optional[RopeTreeNode]
        :type k: int
        :rtype: str
        """
        self.output = '' 
        def dfs(root, res):
            if not root:
                return 

            # concatenates strings when it's leaf node into res for one root
            if not root.left and not root.right:
                res += root.val

            # concatenates final string for root to output variable
            self.output += res
            dfs(root.left, res)
            dfs(root.right, res)
        
        dfs(root, '')
        return self.output[k-1]

            
```