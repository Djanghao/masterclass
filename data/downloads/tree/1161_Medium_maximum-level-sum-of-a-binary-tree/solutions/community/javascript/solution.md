# BFS Level Order | Python / JS Solution

**Author:** TFDLeeter
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/3639068/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/3639068/)

---

Hello **Tenno Leetcoders**, 

For this problem, we are given the `root` of a binary tree, the level of its root is `1`, the level of its children is `2`, and so on.
We want to return the `smallest` level `x` such that the sum of all the values of nodes at level `x` is `maximal`.

### Explanation

Since, we want to find the smallest `level` sum such that all values of nodes at that current level is maximal, we can utilize BFS `level order` to calculate the sum at each level.

1. Start by checking if tree is empty, we will return 0 since there will not be any levels to perform level order
2. Initialize:
    - A variable `max_sum` to store the maximum sum encountered thus far and set it to negative infinity as we want to find the maximal sum
    - A variable `max_level` to store the level with the maximum sum starting from 0
    - A variable `current_level` to keep track of the current level during our queue traversal starting from level 0
    - Create a queue and put root node to start the level order traversal
3. Traverse the q until empty and perform the following:
    - Increment `current_level` by `1` to keep track of the current level
    - Initialize `current_level_sum` variable to calculate the current level sum node vales and set it to 0
    - For JavaScript, we want to first store the initial length of the queue before we process nodes at the current level to make sure nodes wont be skipped
    - Now iterate the length of our q to process all the nodes at the current level and as we iterate:
        - Dequeue a node from the front of the queue and add its values to current_level_sum
        - If dequeued node has a left or right child, we will enqueue to the queue
    - After processing all node at the current level, if our current level sum is greater than our current max sum, this means we have found a level with a larger sum. In this case:
        - Update the maximum sum accordingly
        - Set max level to the current level
4. Return the max level

# Code

**Python**

```
from collections import deque
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:

        if not root: return 0
        max_sum = float("-inf")
        max_level = 0
        current_level = 0

        q = deque([root])
        
        while q:
            current_level += 1
            current_level_sum = 0
    
            for _ in range(len(q)):
                current_node = q.popleft()
                current_level_sum += current_node.val

                if current_node.left: q.append(current_node.left)
                if current_node.right: q.append(current_node.right)

            if current_level_sum > max_sum:
                max_sum = current_level_sum
                max_level = current_level
            
        return  max_level
```

**JavaScript**
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    if(!root) return 0
    let maxSum = -Infinity
    let maxLevel = 0, currentLevel = 0

    const q = [root]

    while(q.length) {
        currentLevel += 1
        let currentLevelSum = 0
        const levelSize = q.length
        for (i = 0; i < levelSize; i++){
            const currentNode = q.shift()
            currentLevelSum += currentNode.val
            if(currentNode.left) q.push(currentNode.left)
            if(currentNode.right) q.push(currentNode.right)
        }

        if(currentLevelSum > maxSum){
            maxSum = currentLevelSum
            maxLevel = currentLevel
        }
    }
    return maxLevel
};
```
### Time Complexity: `O(n)`

### Space Complexity: `O(m)`

where m is the max number of nodes at any level in the binary tree

***Warframe's Darvo wants you to upvote this post  \uD83D\uDE4F\uD83C\uDFFB \u2764\uFE0F\u200D\uD83D\uDD25***
![image](./images/0.gif)